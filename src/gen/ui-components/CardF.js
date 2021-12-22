function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Divider, Flex, IconChat, IconCheck, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function CardF(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(Flex, _extends({
    width: "960px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    alignItems: "flex-start",
    gap: "0",
    direction: "row"
  }, rest, getOverrideProps(overrides, "Flex")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "320px",
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    height: "385px"
  }, getOverrideProps(overrides, "Flex.Image[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "32px 32px 32px 32px",
    backgroundColor: "rgba(255,255,255,1)",
    grow: "1",
    gap: "24px",
    width: "640px",
    position: "relative",
    basis: "640px",
    direction: "column",
    height: "385px"
  }, getOverrideProps(overrides, "Flex.Flex[0]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "576px",
    fontSize: "32px",
    lineHeight: "40px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Classic Long Sleeve T-Shirt"
  }, getOverrideProps(overrides, "Flex.Flex[0].Text[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "center",
    shrink: "0",
    gap: "16px",
    width: "247px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(Rating, _extends({
    size: "large",
    shrink: "0",
    display: "flex",
    height: "36px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Rating[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    textDecoration: "underline",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "19px",
    fontSize: "16px",
    lineHeight: "22px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "72"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "center",
    shrink: "0",
    gap: "16px",
    width: "243px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")), /*#__PURE__*/React.createElement(Badge, _extends({
    padding: "4px 8px 4px 8px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    variation: "default",
    fontFamily: "Inter",
    size: "small",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "700",
    height: "28px",
    direction: "column",
    children: "New"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Badge[0]"))), /*#__PURE__*/React.createElement(Badge, _extends({
    padding: "4px 8px 4px 8px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    variation: "default",
    fontFamily: "Inter",
    size: "small",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "700",
    height: "28px",
    direction: "column",
    children: "Classic"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Badge[1]"))), /*#__PURE__*/React.createElement(Badge, _extends({
    padding: "4px 8px 4px 8px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    variation: "default",
    fontFamily: "Inter",
    size: "small",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "700",
    height: "28px",
    direction: "column",
    children: "Modern"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Badge[2]")))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "576px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Information about this product."
  }, getOverrideProps(overrides, "Flex.Flex[0].Text[1]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    alignItems: "flex-start",
    shrink: "0",
    gap: "16px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")), /*#__PURE__*/React.createElement(IconChat, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "chat",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2].IconChat[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    grow: "1",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    basis: "536px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "536px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "\u201CThis is a quote.\u201C"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2].Text[0]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "576px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Divider[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "32px",
    width: "286px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "16px",
    position: "relative",
    direction: "row",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[0]")), /*#__PURE__*/React.createElement(IconCheck, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(67.00000360608101,168.0000051856041,84.00000259280205,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "check",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[0].IconCheck[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Fast"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[0].Text[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "16px",
    position: "relative",
    direction: "row",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[1]")), /*#__PURE__*/React.createElement(IconCheck, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(67.00000360608101,168.0000051856041,84.00000259280205,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "check",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[1].IconCheck[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Fun"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[1].Text[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "16px",
    position: "relative",
    direction: "row",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[2]")), /*#__PURE__*/React.createElement(IconCheck, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(67.00000360608101,168.0000051856041,84.00000259280205,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "check",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[2].IconCheck[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Flirty"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Flex[2].Text[0]")))))));
}