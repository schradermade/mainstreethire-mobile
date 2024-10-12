import { colors } from "../theme/theme"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { BOTTOM_TAB_ICONS } from "../constants";

export const HotSpottiIcon = ({ size }) => {
  return (
    <MaterialCommunityIcons
      name={BOTTOM_TAB_ICONS['Spottis'].name} 
      size={size}
      color={colors.spottiDark}
    />
  )
}