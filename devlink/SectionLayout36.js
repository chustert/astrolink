"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionLayout36.module.css";

export function SectionLayout36({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Gray BG": "w-variant-55abf53f-8567-8b36-91c5-da9fbfafc19e",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "section_layout36", _activeStyleVariant)}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-large",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "layout36_component",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "max-width-medium",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "margin-bottom",
                  "margin-small",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "heading-style-h3",
                    _activeStyleVariant
                  )}
                  tag="h2"
                >
                  {"Long heading is what you see here in this feature section"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "text-size-medium",
                  _activeStyleVariant
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
