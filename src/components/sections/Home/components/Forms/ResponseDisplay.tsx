"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface ResponseDisplayProps {
  data: unknown;
  className?: string;
}

export function ResponseDisplay({ data, className }: ResponseDisplayProps) {
  // Check if data has markdown content in various possible fields
  const getDisplayContent = () => {
    if (!data || typeof data !== "object") return null;

    const dataObj = data as Record<string, unknown>;

    // List of possible field names that might contain markdown content
    const possibleFields = [
      "rashifal", // Rashifal response
      "kundli", // Kundli response
      "match_report", // Match Making response
      "numerology_report", // Numerology response
      "report", // Generic report
      "result", // Generic result
      "prediction", // Prediction
      "analysis", // Analysis
      "markdown", // Direct markdown field
      "text", // Text field
      "content", // Content field
      "data", // Data field
      "विवरण", // Panchang details
    ];

    // Check each possible field
    for (const field of possibleFields) {
      if (dataObj[field]) {
        const fieldValue = dataObj[field];

        // If it's a string, treat it as markdown
        if (typeof fieldValue === "string") {
          return { type: "markdown" as const, content: fieldValue };
        }

        // If it's an object, check for nested markdown/text/content fields
        if (typeof fieldValue === "object" && fieldValue !== null) {
          const nestedObj = fieldValue as Record<string, unknown>;
          const nestedContent =
            nestedObj.markdown ||
            nestedObj.text ||
            nestedObj.content ||
            nestedObj.व्याख्या || // Kundli explanation
            nestedObj.विवरण; // Panchang details
          if (nestedContent && typeof nestedContent === "string") {
            return { type: "markdown" as const, content: nestedContent };
          }
        }
      }
    }

    // Default to JSON if no markdown content found
    return { type: "json" as const, content: data };
  };

  const displayContent = getDisplayContent();

  if (!displayContent) return null;

  return (
    <div
      className={cn(
        "mt-6 p-6 bg-secondary/20 rounded-xl border border-border/50",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-green-600">
          ✓ Result Generated Successfully
        </h4>
      </div>

      <div className="bg-background rounded-lg p-6 max-h-[70vh] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary/70">
        {displayContent.type === "markdown" ? (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{displayContent.content}</ReactMarkdown>
          </div>
        ) : (
          <pre className="text-xs whitespace-pre-wrap break-words">
            {JSON.stringify(displayContent.content, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
