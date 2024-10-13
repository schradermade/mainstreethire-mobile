import React from "react";
import { View } from "react-native";

const CustomBorder = ({ borderSize, borderColor, marginHoriz, marginVert }) => {
  return (
    <View
      style={{
        height: borderSize,
        backgroundColor: borderColor || "black",
        marginHorizontal: marginHoriz,
        marginVertical: marginVert,
      }}
    />
  );
};

export default CustomBorder;
