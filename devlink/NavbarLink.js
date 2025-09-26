"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavbarLink.module.css";

export function NavbarLink({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  text = "Link One",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar_link")}
      button={false}
      block=""
      options={link}
    >
      {text}
    </_Component>
  );
}
