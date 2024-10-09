import { colors } from "../theme/theme";

export const BOTTOM_TAB_ICONS = {
  Spottis: {
    name: 'map-marker-radius',
    size: 36,
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.darkFont 
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

export enum Category {
  Nearby = 'Nearby',
  Landmarks = 'Landmarks',
  Historical = 'Historical',
  Parks = 'Parks',
  FamousStreets = 'Famous Streets',
  Museums = 'Museums',
  NaturalWonders = 'Natural Wonders',
  Beaches = 'Beaches',
  Entertainment = 'Entertainment',
  Shopping = 'Shopping',
  Dining = 'Dining',
  Dessert = 'Dessert',
  ScenicViews = 'Scenic Views',
  Churches = 'Churches',
  Monuments = 'Monuments',
  NightLife = 'Night Life',
  Aquariums = 'Aquariums',
  GolfCourses = 'Golf Courses',
  Zoos = 'Zoos',
  Theaters = 'Theaters',
  CoffeeShops = 'Coffee Shops',
  SportsArenas = 'Sports Arenas'
}

export const CATEGORY_LIST = [
  {
    title: Category.Nearby,
    iconName: 'map-marker-radius'
  },
  {
    title: Category.Landmarks,
    iconName: 'bridge'
  },
  {
    title: Category.Historical,
    iconName: 'castle'
  },
  {
    title: Category.Parks,
    iconName: 'pine-tree'
  },
  {
    title: Category.FamousStreets,
    iconName: 'road-variant'
  },
  {
    title: Category.Museums,
    iconName: 'bank'
  },
  {
    title: Category.NaturalWonders,
    iconName: 'terrain'
  },
  {
    title: Category.Beaches,
    iconName: 'island'
  },
  {
    title: Category.Entertainment,
    iconName: 'party-popper'
    // drama-masks
  },
  {
    title: Category.Shopping,
    iconName: 'shopping'
  },
  {
    title: Category.Dining,
    iconName: 'noodles'
  },
  {
    title: Category.Dessert,
    iconName: 'ice-cream'
  },
  {
    title: Category.ScenicViews,
    iconName: 'image'
  },
  {
    title: Category.Churches,
    iconName: 'church'
  },
  {
    title: Category.Monuments,
    iconName: 'eiffel-tower'
  },
  {
    title: Category.NightLife,
    iconName: 'glass-wine'
  },
  {
    title: Category.Aquariums,
    iconName: 'dolphin'
  },
  {
    title: Category.GolfCourses,
    iconName: 'golf'
  },
  {
    title: Category.Zoos,
    iconName: 'elephant'
  },
  {
    title: Category.Theaters,
    iconName: 'curtains'
  },
  {
    title: Category.CoffeeShops,
    iconName: 'coffee'
  },
  {
    title: Category.SportsArenas,
    iconName: 'basketball'
  },
]; 

export const SAVED_LISTS = [
  {
    title: 'My Spottis',
    iconName: 'map-marker-radius'
  },
  {
    title: 'Sunriver',
    iconName: 'map-marker-radius'
  },
  {
    title: 'Bend',
    iconName: 'map-marker-radius'
  },
  {
    title: 'Stockholm',
    iconName: 'map-marker-radius'
  },
  {
    title: 'Santa Monica',
    iconName: 'map-marker-radius'
  },
  {
    title: 'Tampa',
    iconName: 'map-marker-radius'
  }
]

export const HOTSPOTTI_NAME = ['HotSp', 'tti']
export const HOTSPOTTI_SLOGAN = ['Be the local.']

// 1. Be the local
// 2. Explore local
// 3. Explore like a local
// 4. Go like local
// 5. Go local.
// 6. Roam like a local
// 7. Wander like a local
// 8. Adventure like a local
// 9. Experience like a local
// 11. Travel like a local
// 12. Travel local