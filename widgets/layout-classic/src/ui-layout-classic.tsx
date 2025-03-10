import { createElement, ReactElement, ReactNode } from "react";

interface LayoutClassicProps {
  topbar: ReactNode;
  sidenav: ReactNode;
  content: ReactNode;
}

export function UILayoutClassic(props: LayoutClassicProps): ReactElement {
  return (
    <div className="rt-Layout rt-Layout--classic">
      <div className="rt-Topbar">{props.topbar}</div>
      <div className="rt-Sidenav">{props.sidenav}</div>
      <div className="rt-MainContent">{props.content}</div>
    </div>
  );
}
