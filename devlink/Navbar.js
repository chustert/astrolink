"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

export function Navbar({
  as: _Component = _Builtin.Block,
  buttonsSlot,
  navbarLinksSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "navbar_component")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_container", "container-large")}
        id={_utils.cx(
          _styles,
          "w-node-_6d8bbe82-2f14-60a2-0865-1848b1d65213-b1d65212"
        )}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar_logo-link")}
          id={_utils.cx(
            _styles,
            "w-node-_6d8bbe82-2f14-60a2-0865-1848b1d65214-b1d65212"
          )}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar_logo")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68d5ae524cd0283d5cb3f61d/68d5ae524cd0283d5cb3f658_Logo-wide.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar_menu")}
          id={_utils.cx(
            _styles,
            "w-node-_6d8bbe82-2f14-60a2-0865-1848b1d65216-b1d65212"
          )}
          tag="nav"
          aria-label="Main navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_menu-links")}
            tag="div"
          >
            {navbarLinksSlot}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_buttons")}
            id={_utils.cx(
              _styles,
              "w-node-_6d8bbe82-2f14-60a2-0865-1848b1d6522a-b1d65212"
            )}
            tag="div"
          >
            {buttonsSlot}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "navbar_menu-button")}
          id={_utils.cx(
            _styles,
            "w-node-_6d8bbe82-2f14-60a2-0865-1848b1d6522d-b1d65212"
          )}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button_line-top")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button_line-middle")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button_line-bottom")}
            tag="div"
          />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
