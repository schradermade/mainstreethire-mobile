import { colors } from "../theme/theme";

export const BOTTOM_TAB_ICONS = {
  Spottis: {
    name: 'map-marker-radius',
    size: 34,
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.spottiLight 
    },
  Community: {
    name: 'account-supervisor-circle',
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont
  },
  Navigate: {
    name: 'map-search',
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont
  },
  Saved: {
    name: 'bookmark',
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont
  },
  Profile: {
    name: 'account',
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont
  }
};

export const CATEGORY_LIST = [
  {
    title: 'All',
    iconName: undefined
  },
  {
    title: 'Nearby',
    iconName: 'map-marker-radius'
  },
  {
    title: 'Landmarks',
    iconName: 'office-building'
  }, 
  {
    title: 'Historical',
    iconName: 'town-hall'
  },
  {
    title: 'Parks',
    iconName: 'pine-tree'
  },
  {
    title: 'Famous streets',
    iconName: 'road-variant'
  }
];