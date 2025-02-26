import { ReactElement, createElement, useMemo, Fragment } from "react";
import { Flex } from "radix-ui-themes/components/flex";
import { IssueList } from "radix-ui-themes/components/issue-list";
import { layoutPropsSchema } from "radix-ui-themes/validation/layout-props.validation";
import { flexPropsSchema } from "radix-ui-themes/validation/flex-props.validation";
import { reduceRespProps, ResponsiveProp } from "radix-ui-themes/helpers/resp-props";
import { z } from "zod";

const responsivePropsSchema = z.object({
  ...flexPropsSchema.shape,
  ...layoutPropsSchema.shape
});

interface UIFlexProps {
  class?: string;
  style?: React.CSSProperties;
  responsiveProps: ResponsiveProp[];
  children?: React.ReactNode;
}

export function UIFlex(props: UIFlexProps): ReactElement {
  console.log("UIFlex", props);
  const responsivePropsResult = useMemo(
    () => responsivePropsSchema.safeParse(reduceRespProps(props.responsiveProps)),
    [props.responsiveProps]
  );

  if (!responsivePropsResult.success) {
    return (
      <Fragment>
        <IssueList error={responsivePropsResult.error} />
        {props.children}
      </Fragment>
    );
  }

  return <Flex {...responsivePropsResult.data} className={props.class} children={props.children} style={props.style} />;
}
