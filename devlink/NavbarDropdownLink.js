"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NavbarDropdownLink.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main"],"target":{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380561820},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main"],"target":{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380561834},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380616175},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d5ae524cd0283d5cb3f601|66b48467-6f4a-621c-25d7-9077258e57bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380616183}},"actionLists":{"a-3":{"id":"a-3","title":"Navbar 1 dropdown [Open] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"value":1,"unit":""}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4bd"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-4":{"id":"a-4","title":"Navbar 1 dropdown [Close] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4bd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-5":{"id":"a-5","title":"Navbar 1 dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-5-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4bd"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-6":{"id":"a-6","title":"Navbar 1 dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-list","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4be"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["b4cbc563-164c-b17f-5f25-97c51fd0b4bd"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavbarDropdownLink({
  as: _Component = _Builtin.DropdownWrapper,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar_menu-dropdown")}
      tag="div"
      delay="200"
      hover={true}
    >
      <_Builtin.DropdownToggle
        className={_utils.cx(_styles, "navbar_dropdown-toggle")}
        tag="div"
      >
        <_Builtin.Block tag="div">{"Link Four"}</_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "dropdown-chevron")}
          value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.DropdownToggle>
      <_Builtin.DropdownList
        className={_utils.cx(_styles, "navbar_dropdown-list")}
        tag="nav"
      >
        <_Builtin.DropdownLink
          className={_utils.cx(_styles, "navbar_dropdown-link")}
          options={{
            href: "#",
          }}
        >
          {"Link Five"}
        </_Builtin.DropdownLink>
        <_Builtin.DropdownLink
          className={_utils.cx(_styles, "navbar_dropdown-link")}
          options={{
            href: "#",
          }}
        >
          {"Link Six"}
        </_Builtin.DropdownLink>
        <_Builtin.DropdownLink
          className={_utils.cx(_styles, "navbar_dropdown-link")}
          options={{
            href: "#",
          }}
        >
          {"Link Seven"}
        </_Builtin.DropdownLink>
      </_Builtin.DropdownList>
    </_Component>
  );
}
