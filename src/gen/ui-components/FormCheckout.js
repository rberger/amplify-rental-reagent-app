function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, Divider, Flex, IconDelete, IconShoppingBag, Image, SelectField, Text, TextField, View } from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
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
    padding: "32px 0px 32px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    grow: "1",
    alignItems: "flex-start",
    gap: "0",
    width: "667px",
    position: "relative",
    basis: "667px",
    direction: "row",
    height: "1148px"
  }, getOverrideProps(overrides, "Flex.Flex[0]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    grow: "1",
    alignItems: "center",
    gap: "32px",
    width: "667px",
    position: "relative",
    basis: "667px",
    justifyContent: "center",
    direction: "column",
    height: "1084px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 32px 0px 32px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "24px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Info"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0].Text[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0].TextField[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0].TextField[1]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "667px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 32px 0px 32px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "24px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Shipping"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Text[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].TextField[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].TextField[1]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    alignItems: "flex-start",
    shrink: "0",
    gap: "24px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Flex[0]")), /*#__PURE__*/React.createElement(TextField, _extends({
    grow: "1",
    size: "large",
    display: "flex",
    width: "289.5px",
    label: "Label",
    basis: "289.5px",
    variation: "default",
    height: "74px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Flex[0].TextField[0]"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    grow: "1",
    size: "large",
    display: "flex",
    width: "289.5px",
    label: "Label",
    basis: "289.5px",
    variation: "default",
    height: "74px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Flex[0].SelectField[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    alignItems: "flex-start",
    shrink: "0",
    gap: "24px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Flex[1]")), /*#__PURE__*/React.createElement(TextField, _extends({
    grow: "1",
    size: "large",
    display: "flex",
    width: "289.5px",
    label: "Label",
    basis: "289.5px",
    variation: "default",
    height: "74px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Flex[1].TextField[0]"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    grow: "1",
    size: "large",
    display: "flex",
    width: "289.5px",
    label: "Label",
    basis: "289.5px",
    variation: "default",
    height: "74px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1].Flex[1].SelectField[0]"))))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "667px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[1]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 32px 0px 32px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "24px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "24px",
    position: "relative",
    fontWeight: "700",
    direction: "column",
    children: "Card info"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].Text[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].TextField[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "Label",
    size: "large",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].TextField[1]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    alignItems: "flex-start",
    shrink: "0",
    gap: "24px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].Flex[0]")), /*#__PURE__*/React.createElement(SelectField, _extends({
    grow: "1",
    size: "large",
    display: "flex",
    width: "289.5px",
    label: "Label",
    basis: "289.5px",
    variation: "default",
    height: "74px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].Flex[0].SelectField[0]"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    grow: "1",
    size: "large",
    display: "flex",
    width: "289.5px",
    label: "Label",
    basis: "289.5px",
    variation: "default",
    height: "74px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[2].Flex[0].SelectField[1]"))))))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "32px 0px 32px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "flex-start",
    shrink: "0",
    gap: "10px",
    position: "relative",
    direction: "row",
    height: "934px"
  }, getOverrideProps(overrides, "Flex.Flex[1]")), /*#__PURE__*/React.createElement(Flex, _extends({
    width: "469px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    shrink: "0",
    height: "870px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "194px",
    left: "32px",
    height: "134px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0]")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "89px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "130px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].Image[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "112px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "20px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "Order Summary"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "32px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Black"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].Text[1]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Basic Tee"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].Text[2]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "64px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Large"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].Text[3]"))), /*#__PURE__*/React.createElement(IconDelete, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    top: "0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    left: "381px",
    width: "24px",
    fontSize: "24px",
    position: "absolute",
    type: "delete",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].IconDelete[0]"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    labelHidden: "true",
    top: "104px",
    size: "small",
    left: "341px",
    display: "flex",
    width: "64px",
    position: "absolute",
    variation: "default"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[0].SelectField[0]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "469px",
    orientation: "horizontal",
    position: "absolute",
    top: "362px",
    size: "small",
    left: "0px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[0]"))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "469px",
    orientation: "horizontal",
    position: "absolute",
    top: "161px",
    size: "small",
    left: "0px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[1]"))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "469px",
    orientation: "horizontal",
    position: "absolute",
    top: "72px",
    size: "small",
    left: "0px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[2]"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "395px",
    left: "32px",
    height: "134px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1]")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "89px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "130px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].Image[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "112px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "20px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "Order Summary"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "32px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Black"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].Text[1]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Basic Tee"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].Text[2]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(92.00000211596489,102.00000151991844,112.000000923872,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "64px",
    left: "121px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Large"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].Text[3]"))), /*#__PURE__*/React.createElement(IconDelete, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    top: "0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    left: "381px",
    width: "24px",
    fontSize: "24px",
    position: "absolute",
    type: "delete",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].IconDelete[0]"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    labelHidden: "true",
    top: "104px",
    size: "small",
    left: "341px",
    display: "flex",
    width: "64px",
    position: "absolute",
    variation: "default"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[1].SelectField[0]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "469px",
    orientation: "horizontal",
    position: "absolute",
    top: "563px",
    size: "small",
    left: "0px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[3]"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "596px",
    left: "32px",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[2]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "0px",
    width: "77.75053405761719px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Subtotal"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[2].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "right",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "340px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "$320.00"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[2].Text[1]")))), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "636px",
    left: "32px",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[3]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "0px",
    width: "80.14285278320312px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Shipping"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[3].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "right",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "353px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "$15.00"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[3].Text[1]")))), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "676px",
    left: "32px",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[4]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "0px",
    width: "53.82728958129883px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "Taxes"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[4].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "right",
    display: "flex",
    letterSpacing: "0.010000000000000009px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "350px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "400",
    direction: "column",
    children: "$26.80"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[4].Text[1]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "405px",
    orientation: "horizontal",
    position: "absolute",
    top: "716px",
    size: "small",
    left: "32px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[4]"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "733px",
    left: "32px",
    height: "20px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[5]")), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "0px",
    width: "50.23880386352539px",
    fontSize: "16px",
    lineHeight: "20px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "Total"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[5].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "right",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "336px",
    fontSize: "16px",
    lineHeight: "20px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "$361.80"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[5].Text[1]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "469px",
    orientation: "horizontal",
    position: "absolute",
    top: "789px",
    size: "small",
    left: "0px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Divider[5]"))), /*#__PURE__*/React.createElement(Button, _extends({
    top: "822px",
    size: "large",
    left: "32px",
    display: "flex",
    width: "405px",
    position: "absolute",
    variation: "primary",
    children: "Place Order"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Button[0]"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "405px",
    padding: "0px 0px 0px 0px",
    position: "absolute",
    top: "105px",
    left: "32px",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[6]")), /*#__PURE__*/React.createElement(IconShoppingBag, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    top: "0px",
    left: "0px",
    width: "24px",
    fontSize: "24px",
    position: "absolute",
    type: "shopping_bag",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[6].IconShoppingBag[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "40px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "Cart (2)"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[6].Text[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    top: "0px",
    left: "343px",
    fontSize: "16px",
    lineHeight: "24px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "$101.70"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].View[6].Text[1]")))), /*#__PURE__*/React.createElement(Badge, _extends({
    backgroundColor: "rgba(214.00000244379044,245.00000059604645,219.0000021457672,1)",
    color: "rgba(54.00000058114529,94.0000019967556,61.00000016391277,1)",
    textAlign: "left",
    display: "flex",
    letterSpacing: "0.49px",
    justifyContent: "flex-start",
    variation: "success",
    fontFamily: "Inter",
    top: "0px",
    size: "default",
    left: "32px",
    width: "405px",
    fontSize: "16px",
    lineHeight: "20px",
    position: "absolute",
    fontWeight: "700",
    direction: "column",
    children: "Discount - 10% off"
  }, getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Badge[0]"))))));
}