import * as React from "react";
import * as Types from "./types";

declare function AstroButton(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  variant?: "Primary" | "Secondary";
}): React.JSX.Element;
