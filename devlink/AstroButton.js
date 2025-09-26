"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AstroButton.module.css";

export function AstroButton({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  text = "This is the primary button",
  variant = "Primary",
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-0f885e76-f543-31fa-323c-4490a2b5b54d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
