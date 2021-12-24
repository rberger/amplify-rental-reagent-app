function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function FAQItem(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(Flex, _extends({
    width: "1280px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    justifyContent: "center",
    gap: "0",
    direction: "column"
  }, rest, getOverrideProps(overrides, "Flex")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "24px 24px 24px 24px",
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    shrink: "0",
    gap: "0",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    grow: "1",
    gap: "16px",
    width: "1232px",
    position: "relative",
    basis: "1232px",
    direction: "column",
    height: "88px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "1232px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "What\u2019s the company?"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "1232px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "A general overview that includes the name of the company, year it was founded and its goal. For example: Company was founded in 2019, with a goal to bring better products to every home across the US."
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]"))))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "1280px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Divider[0]"))));
}