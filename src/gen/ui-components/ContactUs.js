function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, IconCamera, IconFlag, SelectField, Text, TextField } from "@aws-amplify/ui-react";
export default function ContactUs(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    position: "relative",
    gap: "24px",
    direction: "column"
  }, rest, getOverrideProps(overrides, "Flex")), /*#__PURE__*/React.createElement(Flex, _extends({
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
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "350px",
    fontSize: "32px",
    lineHeight: "40px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Need assistance?"
  }, getOverrideProps(overrides, "Flex.Flex[0].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "350px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
  }, getOverrideProps(overrides, "Flex.Flex[0].Text[1]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "16px",
    width: "350px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[1]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "20px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "US HELP CENTER"
  }, getOverrideProps(overrides, "Flex.Flex[1].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "20px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "/"
  }, getOverrideProps(overrides, "Flex.Flex[1].Text[1]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "20px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "SUBMIT A REQUEST"
  }, getOverrideProps(overrides, "Flex.Flex[1].Text[2]")))), /*#__PURE__*/React.createElement(SelectField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.SelectField[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.TextField[0]"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.SelectField[1]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.TextField[1]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.TextField[2]"))), /*#__PURE__*/React.createElement(Button, _extends({
    alignSelf: "stretch",
    size: "large",
    shrink: "0",
    variation: "primary",
    display: "flex",
    children: "Primary Button"
  }, getOverrideProps(overrides, "Flex.Button[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "24px",
    width: "201px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[2]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "center",
    shrink: "0",
    gap: "8px",
    position: "relative",
    direction: "row",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")), /*#__PURE__*/React.createElement(IconCamera, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "camera",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[2].Flex[0].IconCamera[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "14px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Instagram"
  }, getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Text[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "center",
    shrink: "0",
    gap: "8px",
    position: "relative",
    direction: "row",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[2].Flex[1]")), /*#__PURE__*/React.createElement(IconFlag, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "flag",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[2].Flex[1].IconFlag[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "14px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Twitter"
  }, getOverrideProps(overrides, "Flex.Flex[2].Flex[1].Text[0]"))))));
}