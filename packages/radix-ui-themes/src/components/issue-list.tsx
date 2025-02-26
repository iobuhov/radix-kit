import * as React from "react";
import { ZodError, type ZodIssue } from "zod";

export function IssueList({ error }: { error: ZodError }): React.ReactNode {
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
