function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, IconClose, Image, Text, TextField } from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp
  };
  return /*#__PURE__*/React.createElement(Flex, _extends({
    width: "640px",
    padding: "24px 0px 24px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
    gap: "16px",
    direction: "column"
  }, rest, getOverrideProps(overrides, "Flex")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "24px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0]")), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 24px 0px 24px",
    alignSelf: "stretch",
    alignItems: "center",
    shrink: "0",
    gap: "16px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")), /*#__PURE__*/React.createElement(IconClose, _extends({
    padding: "0px 0px 0px 0px",
    overflow: "hidden",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    shrink: "0",
    width: "24px",
    fontSize: "24px",
    position: "relative",
    type: "close",
    height: "24px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].IconClose[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "Edit Profile"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "640px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Divider[0]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 24px",
    alignSelf: "stretch",
    alignItems: "center",
    shrink: "0",
    gap: "16px",
    position: "relative",
    direction: "row"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "96px",
    padding: "0px 0px 0px 0px",
    position: "relative",
    borderRadius: "160px",
    shrink: "0",
    height: "96px"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Image[0]"))), /*#__PURE__*/React.createElement(Text, _extends({
    padding: "0px 0px 0px 0px",
    color: "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
    textAlign: "left",
    shrink: "0",
    display: "flex",
    textDecoration: "underline",
    justifyContent: "flex-start",
    fontFamily: "Inter",
    fontSize: "16px",
    lineHeight: "22px",
    position: "relative",
    fontWeight: "400",
    direction: "column",
    children: "Upload New Image"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Text[0]")))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 24px 0px 24px",
    alignSelf: "stretch",
    position: "relative",
    shrink: "0",
    gap: "16px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2]")), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "name",
    size: "default",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2].TextField[0]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "location",
    size: "default",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2].TextField[1]"))), /*#__PURE__*/React.createElement(TextField, _extends({
    alignSelf: "stretch",
    label: "email",
    size: "default",
    shrink: "0",
    variation: "default",
    display: "flex"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[2].TextField[2]")))), /*#__PURE__*/React.createElement(Divider, _extends({
    width: "640px",
    alignSelf: "stretch",
    orientation: "horizontal",
    size: "small",
    shrink: "0"
  }, getOverrideProps(overrides, "Flex.Flex[0].Divider[1]"))), /*#__PURE__*/React.createElement(Flex, _extends({
    width: "97px",
    padding: "0px 0px 0px 24px",
    position: "relative",
    shrink: "0",
    gap: "10px",
    direction: "column"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3]")), /*#__PURE__*/React.createElement(Button, _extends({
    padding: "8px 16px 8px 16px",
    size: "default",
    shrink: "0",
    display: "flex",
    width: "73px",
    variation: "primary",
    children: "Save"
  }, getOverrideProps(overrides, "Flex.Flex[0].Flex[3].Button[0]"))))));
}