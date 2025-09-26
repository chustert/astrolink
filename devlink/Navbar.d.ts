import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  buttonsSlot?: Types.Devlink.Slot;
  navbarLinksSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
