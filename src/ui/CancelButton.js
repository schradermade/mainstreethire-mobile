import React from "react";
import RoundActionButton from "./RoundActionButton";
import { ICONS } from "../constants";
import { colors, iconSize } from "../theme/theme";

const CancelButton = ({ onPress }) => {
  return (
    <RoundActionButton
      onIconPress={onPress}
      iconName={ICONS.close}
      iconColor={colors.darkFont}
      iconSize={iconSize.xsmall}
      styling={{
        borderWidth: 1.25,
        borderColor: colors.darkFont,
      }}
    />
  );
};

export default CancelButton;
