import { ReactElement, createElement, useEffect, useRef, useState } from "react";
import { TabsPreviewProps, TabsPreviewType } from "../typings/TabsProps";
import { UITabs } from "./ui-tabs";

import { Selectable } from "mendix/preview/Selectable";

declare module "mendix/preview/Selectable" {
  interface SelectableProps<T> {
    object: T;
    caption?: string;
    children: React.ReactNode;
  }
}

export function preview(props: TabsPreviewProps): ReactElement {
  const [active, setActive] = useState<number | null>(props.tabs[0].value);
  console.log(active);
  return (
    <UITabs {...props}>
      {props.tabs.map(tab => (
        <PreviewTab
          tab={tab}
          onSelect={setActive}
          className="rt-TabsContent"
          data-active={tab.value === active}
          data-caption={tab.caption}
        />
      ))}
    </UITabs>
  );
}

interface PreviewTabProps extends Omit<JSX.IntrinsicElements["div"], "onSelect"> {
  tab: TabsPreviewType;
  onSelect: (value: number | null) => void;
}

function PreviewTab({ tab, onSelect, className, ...rest }: PreviewTabProps): ReactElement {
  const { ref, emitter } = useMO<HTMLDivElement>();

  useEffect(() => {
    const cb = () => onSelect(tab.value);
    emitter.addEventListener("mutation", cb);
    return () => emitter.removeEventListener("mutation", cb);
  }, [onSelect, tab]);

  return (
    <Selectable object={tab} caption={tab.caption}>
      <tab.content.renderer>
        <div className={`rt-PreviewTab ${className}`} ref={ref} {...rest} />
      </tab.content.renderer>
    </Selectable>
  );
}

export function useMO<T extends Node>(): { ref: React.RefObject<T>; emitter: EventTarget } {
  const ref = useRef<T>(null);
  const eventEmitter = useRef(new EventTarget());

  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === "attributes") {
          if ((mutation.target as HTMLElement).dataset?.selected === "true") {
            eventEmitter.current.dispatchEvent(new Event("mutation"));
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current, {
        attributes: true,
        subtree: true
      });
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return { ref, emitter: eventEmitter.current };
}
