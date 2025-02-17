import { ReactElement, createElement } from "react";
import { FlexPreviewProps } from "../typings/FlexProps";
import { Flex as RadixFlex } from "@radix-ui/themes-radix-kit/components/flex";

export function preview(props: FlexPreviewProps): ReactElement {
    return (
        <RadixFlex wrap="wrap" className={props.class} style={props.styleObject}>
            <props.children.renderer>
                <div style={{ display: "contents" }} />
            </props.children.renderer>
        </RadixFlex>
    );
}
