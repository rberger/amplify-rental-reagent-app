function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function ProductDetail(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(Flex, _extends({
    width: "1160px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    alignItems: "flex-start",
    gap: "24px",
    direction: "row"
  }, rest, getOverrideProps(overrides, "Flex")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    grow: "1",
    gap: "32px",
    width: "740px",
    position: "relative",
    basis: "740px",
    direction: "column",
    height: "1098px"
  }, getOverrideProps(overrides, "Flex.Flex[0]")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "740px",
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    height: "480px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Image[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "32px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "8px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "740px",
    fontSize: "40px",
    lineHeight: "48px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Basic Tee 6-Pack"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "740px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat."
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0].Text[1]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "740px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "8px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "740px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Highlights"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "740px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "    Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Text[1]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "740px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[1]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "8px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "740px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Details"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    width: "740px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].Text[1]")))))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "1px",
    orientation: "vertical",
    size: "small",
    shrink: "0",
    height: "1098px"
  }, getOverrideProps(overrides, "Flex.Divider[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    position: "relative",
    shrink: "0",
    gap: "24px",
    direction: "column",
    height: "345px"
  }, getOverrideProps(overrides, "Flex.Flex[1]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "40px",
    lineHeight: "48px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "$192"
  }, getOverrideProps(overrides, "Flex.Flex[1].Text[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    shrink: "0",
    gap: "16px",
    width: "238px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")), /*#__PURE__*/React.createElement(Rating, _extends({
    size: "default",
    shrink: "0",
    display: "flex",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Rating[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    textDecoration: "underline",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "14px",
    lineHeight: "18px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "12 reviews"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    width: "371px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    shrink: "0",
    height: "225px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1]")), /*#__PURE__*/React.createElement(Button, _extends({
    padding: "8px 16px 8px 16px",
    top: "189px",
    size: "default",
    left: "0px",
    display: "flex",
    width: "371px",
    position: "absolute",
    variation: "primary",
    children: "Primary Button"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Button[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    top: "40px",
    left: "0px",
    gap: "24px",
    position: "absolute",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0]")), /*#__PURE__*/React.createElement(Button, _extends({
    backgroundColor: "rgba(239.00000095367432,240.00000089406967,240.00000089406967,1)",
    size: "large",
    shrink: "0",
    display: "flex",
    width: "75px",
    isDisabled: "true",
    variation: "primary",
    height: "48px",
    children: "XXS"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0].Button[0]"))), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    display: "flex",
    width: "75px",
    variation: "primary",
    height: "48px",
    children: "XS"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0].Button[1]"))), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    display: "flex",
    width: "74px",
    variation: "primary",
    height: "48px",
    children: "S"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0].Button[2]"))), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    display: "flex",
    width: "75px",
    variation: "primary",
    height: "48px",
    children: "M"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[0].Button[3]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignItems: "flex-start",
    top: "112px",
    left: "0px",
    gap: "24px",
    position: "absolute",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[1]")), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    gap: "24px",
    display: "flex",
    width: "75px",
    variation: "primary",
    height: "48px",
    children: "L"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[1].Button[0]"))), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    gap: "24px",
    display: "flex",
    width: "75px",
    variation: "primary",
    height: "48px",
    children: "XL"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[1].Button[1]"))), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    gap: "24px",
    display: "flex",
    width: "74px",
    variation: "primary",
    height: "48px",
    children: "2XL"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[1].Button[2]"))), /*#__PURE__*/React.createElement(Button, _extends({
    size: "large",
    shrink: "0",
    gap: "24px",
    display: "flex",
    width: "75px",
    variation: "primary",
    height: "48px",
    children: "3XL"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Flex[1].Button[3]")))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "right",
    display: "flex",
    textDecoration: "underline",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "3px",
    left: "300px",
    fontSize: "14px",
    lineHeight: "18px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Size Guide"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "0px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Size "
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[1].Text[1]"))))));
}