function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardA(props) {
  const {
    rental,
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    position: "relative",
    justifyContent: "center",
    gap: "16px",
    direction: "column"
  }, rest, getOverrideProps(overrides, "Flex")), /*#__PURE__*/React.createElement(Image, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    borderRadius: "14px",
    shrink: "0",
    src: rental?.image,
    width: "320px",
    position: "relative",
    height: "400px"
  }, getOverrideProps(overrides, "Flex.Image[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "8px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "320px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: rental?.name
  }, getOverrideProps(overrides, "Flex.Flex[0].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "320px",
    fontSize: "14px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: `${"$"}${rental?.price}${"/night"}`
  }, getOverrideProps(overrides, "Flex.Flex[0].Text[1]")))));
}