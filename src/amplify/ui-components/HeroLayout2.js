function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function HeroLayout2(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "1440px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    height: "858px"
  }, rest, getOverrideProps(overrides, "View")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "1440px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "858px"
  }, getOverrideProps(overrides, "View.Image[0]"))), /*#__PURE__*/React.createElement(HeroLayout3, _extends({
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "858px",
    display: "flex"
  }, getOverrideProps(overrides, "View.HeroLayout3[0]"))));
}