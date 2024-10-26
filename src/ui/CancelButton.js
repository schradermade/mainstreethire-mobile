import React from 'react';
import RoundActionButton from './RoundActionButton';
import { ICONS } from '../constants';
import { colors, iconSize } from '../theme/theme';

const CancelButton = ({ onPress, hasBorder = false }) => {
  return (
    <RoundActionButton
      onIconPress={onPress}
      iconName={ICONS.close}
      iconColor={colors.darkFont}
      iconSize={iconSize.small}
      styling={{
        borderWidth: hasBorder ? 1.25 : null,
        borderColor: hasBorder ? colors.darkFont : null,
      }}
    />
  );
};

export default CancelButton;
