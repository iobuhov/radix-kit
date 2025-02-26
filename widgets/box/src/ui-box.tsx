import { ReactElement, createElement, useMemo, Fragment } from "react";
import { Box } from "radix-ui-themes/components/box";
import { IssueList } from "radix-ui-themes/components/issue-list";
import { layoutPropsSchema } from "radix-ui-themes/validation/layout-props.validation";
import { reduceRespProps, ResponsiveProp } from "radix-ui-themes/helpers/resp-props";

interface UIBoxProps {
  class?: string;
  style?: React.CSSProperties;
  responsiveProps: ResponsiveProp[];
  children?: React.ReactNode;
}

export function UIBox(props: UIBoxProps): ReactElement {
  const layoutPropsResult = useMemo(
    () => layoutPropsSchema.safeParse(reduceRespProps(props.responsiveProps)),
    [props.responsiveProps]
  );

  if (!layoutPropsResult.success) {
    return (
      <Fragment>
        <IssueList error={layoutPropsResult.error} />
        {props.children}
      </Fragment>
    );
  }

  return (
    <Box {...layoutPropsResult.data} className={props.class}>
      {props.children}
    </Box>
  );
}
