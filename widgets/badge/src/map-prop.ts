import { BadgeProps } from "@radix-ui/themes-radix-kit/components/Badge";
import { BadgeContainerProps, BadgePreviewProps } from "../typings/BadgeProps";

interface CommonProps {
    text: string;
    class?: string;
}

function withDefaultClasses(className: string, defaults: [re: RegExp, token: string][]): string {
    const cls = defaults.reduce((classList, [re, token]) => {
        if (!re.test(className)) {
            classList.push(token);
        }
        return classList;
    }, className.split(" "));
    return cls.join(" ");
}

const defaultClasses = [
    [/rt-variant/i, "rt-variant-soft"],
    [/rt-r-size/i, "rt-r-size-1"]
] satisfies [RegExp, string][];

export function fromCommon(props: CommonProps): BadgeProps {
    return {
        className: withDefaultClasses(props.class ?? "", defaultClasses),
        children: props.text || "Badge"
    };
}

export function fromPreview(props: BadgePreviewProps): BadgeProps {
    return fromCommon(props);
}

export function fromContainer(props: BadgeContainerProps): BadgeProps {
    return fromCommon(props);
}
