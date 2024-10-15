import { colors } from "../theme/theme";

export enum ICONS {
  userGroup = "supervised-user-circle",
  categoryList = "clipboard-multiple-outline",
  travelLocations = "map-marker-distance",
  travelDates = "calendar-range-outline",
  filter = "filter-variant",
  close = "close",
  share = "share-outline",
  spottiLogo = "map-marker-radius",
  community = "account-group-outline",
  navigate = "map-search",
  save = "bookmark-outline",
  profile = "account-outline",
  arrowLeft = "chevron-left",
  visitedLocation = "map-marker-check-outline",
  settings = "cog",
  dots = "dots-horizontal",
  sort = "sort",
  landmarks = "bridge",
  historical = "castle",
  parks = "pine-tree",
  famousStreets = "road-variant",
  museums = "bank",
  naturalWonders = "terrain",
  beaches = "island",
  entertainment = "party-popper",
  shopping = "shopping",
  dining = "noodles",
  dessert = "ice-cream",
  scenicViews = "image",
  church = "church",
  monument = "eiffel-tower",
  nightLife = "glass-wine",
  aquarium = "dolphin",
  golf = "golf",
  zoo = "elephant",
  theater = "curtains",
  coffee = "coffee",
  basketball = "basketball",
}
// Material Icons
// hive
// nightlife

// Material Community Icons
// filter-variant

export const BOTTOM_TAB_ICONS = {
  Spottis: {
    name: ICONS.spottiLogo,
    size: 32,
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.darkFont,
  },
  Community: {
    name: ICONS.community,
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont,
  },
  Navigate: {
    name: ICONS.navigate,
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont,
  },
  Saved: {
    name: ICONS.save,
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont,
  },
  Profile: {
    name: ICONS.profile,
    size: 24,
    focusedColor: colors.offWhiteFont,
    unfocusedColor: colors.darkFont,
  },
};

export enum Category {
  Nearby = "Nearby",
  Landmarks = "Landmarks",
  Historical = "Historical",
  Parks = "Parks",
  FamousStreets = "Famous Streets",
  Museums = "Museums",
  NaturalWonders = "Natural Wonders",
  Beaches = "Beaches",
  Entertainment = "Entertainment",
  Shopping = "Shopping",
  Dining = "Dining",
  Dessert = "Dessert",
  ScenicViews = "Scenic Views",
  Churches = "Churches",
  Monuments = "Monuments",
  NightLife = "Night Life",
  Aquariums = "Aquariums",
  GolfCourses = "Golf Courses",
  Zoos = "Zoos",
  Theaters = "Theaters",
  CoffeeShops = "Coffee Shops",
  SportsArenas = "Sports Arenas",
}

export const CATEGORY_LIST = [
  {
    title: Category.Nearby,
    iconName: ICONS.spottiLogo,
  },
  {
    title: Category.Landmarks,
    iconName: ICONS.landmarks,
  },
  {
    title: Category.Historical,
    iconName: ICONS.historical,
  },
  {
    title: Category.Parks,
    iconName: ICONS.parks,
  },
  {
    title: Category.FamousStreets,
    iconName: ICONS.famousStreets,
  },
  {
    title: Category.Museums,
    iconName: ICONS.museums,
  },
  {
    title: Category.NaturalWonders,
    iconName: ICONS.naturalWonders,
  },
  {
    title: Category.Beaches,
    iconName: ICONS.beaches,
  },
  {
    title: Category.Entertainment,
    iconName: ICONS.entertainment,
    // drama-masks
  },
  {
    title: Category.Shopping,
    iconName: ICONS.shopping,
  },
  {
    title: Category.Dining,
    iconName: ICONS.dining,
  },
  {
    title: Category.Dessert,
    iconName: ICONS.dessert,
  },
  {
    title: Category.ScenicViews,
    iconName: ICONS.scenicViews,
  },
  {
    title: Category.Churches,
    iconName: ICONS.church,
  },
  {
    title: Category.Monuments,
    iconName: ICONS.monument,
  },
  {
    title: Category.NightLife,
    iconName: ICONS.nightLife,
  },
  {
    title: Category.Aquariums,
    iconName: ICONS.aquarium,
  },
  {
    title: Category.GolfCourses,
    iconName: ICONS.golf,
  },
  {
    title: Category.Zoos,
    iconName: ICONS.zoo,
  },
  {
    title: Category.Theaters,
    iconName: ICONS.theater,
  },
  {
    title: Category.CoffeeShops,
    iconName: ICONS.coffee,
  },
  {
    title: Category.SportsArenas,
    iconName: ICONS.basketball,
  },
];

export const SAVED_LISTS = [
  {
    title: "Europe 2025",
    iconName: ICONS.spottiLogo,
  },
  {
    title: "Sunriver Oct18",
    iconName: ICONS.spottiLogo,
  },
  {
    title: "Stockholm",
    iconName: ICONS.spottiLogo,
  },
  {
    title: "Santa Monica",
    iconName: ICONS.spottiLogo,
  },
  {
    title: "Tampa",
    iconName: ICONS.spottiLogo,
  },
];

export const HOTSPOTTI_NAME = ["HotSp", "tti"];
export const HOTSPOTTI_SLOGAN = ["Be the local."];

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
