import { ReactElement, createElement, useMemo, Fragment } from "react";
import { Box } from "radix-ui-themes/components/box";
import { layoutPropsSchema } from "radix-ui-themes/validation/layout-props.validation";
import { NameEnum } from "../typings/BoxProps";
import { respProps, ResponsiveProp } from "./resp-props";
import { ZodError, ZodIssue } from "zod";

export function UIBox(props: {
  class?: string;
  responsiveProps: ResponsiveProp<NameEnum>[];
  children?: React.ReactNode;
}): ReactElement {
  const { children } = props;
  const layoutPropsResult = useMemo(
    () => layoutPropsSchema.safeParse(respProps(props.responsiveProps)),
    [props.responsiveProps]
  );

  if (!layoutPropsResult.success) {
    return (
      <Fragment>
        <IssueList error={layoutPropsResult.error} />
        {children}
      </Fragment>
    );
  }

  return (
    <Box {...layoutPropsResult.data} className={props.class}>
      {children}
    </Box>
  );
}

function IssueList({ error }: { error: ZodError }): React.ReactNode {
  const renderIssue = (zodObj: ZodIssue | ZodError): React.ReactNode => {
    let issue: ZodIssue = zodObj instanceof ZodError ? zodObj.issues[0] : zodObj;

    if ("unionErrors" in zodObj) {
      return zodObj.unionErrors.map(renderIssue);
    }

    if (issue.code === "invalid_literal" && issue.expected === "") {
      return null;
    }

    return (
      <p key={issue.path.join(".")}>
        <code>
          {issue.path.join(".")}: {issue.message}
        </code>
      </p>
    );
  };

  return <pre>{error.issues.map(renderIssue)}</pre>;
}
