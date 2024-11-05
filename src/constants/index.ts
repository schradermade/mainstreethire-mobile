import { colors } from '../theme/theme';

export enum ICONS {
  userGroup = 'supervised-user-circle',
  categoryList = 'clipboard-multiple-outline',
  travelLocations = 'map-marker-distance',
  spottisMultiple = 'map-marker-multiple-outline',
  buildTrip = 'map-marker-plus',
  travelDates = 'calendar-range-outline',
  filter = 'filter-variant',
  close = 'close',
  share = 'share-outline',
  spottiLogo = 'map-marker-radius-outline',
  community = 'account-group-outline',
  navigate = 'map-search-outline',
  save = 'bookmark-outline',
  profile = 'account-outline',
  arrowLeft = 'chevron-left',
  visitedLocation = 'map-marker-check-outline',
  settings = 'cog',
  dots = 'dots-horizontal',
  sort = 'sort',
  landmarks = 'bridge',
  historical = 'castle',
  parks = 'pine-tree',
  famousStreets = 'road-variant',
  museums = 'bank',
  naturalWonders = 'terrain',
  beaches = 'island',
  entertainment = 'party-popper',
  shopping = 'shopping',
  dining = 'noodles',
  dessert = 'ice-cream',
  scenicViews = 'image',
  church = 'church',
  monument = 'eiffel-tower',
  nightLife = 'glass-wine',
  aquarium = 'dolphin',
  golf = 'golf',
  zoo = 'elephant',
  theater = 'curtains',
  coffee = 'coffee',
  basketball = 'basketball',
  star = 'star',
  circleSmall = 'circle-small',
  clock = 'clock',
  food = 'food',
  trips = 'bag-suitcase-outline',
  reply = 'reply',
  trophy = 'trophy-variant-outline',
  upVote = 'arrow-up-bold-circle-outline',
  downVote = 'arrow-down-bold-circle-outline',
  chatBubble = 'chat-processing-outline',
  loading = 'loading',
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
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.darkFont,
  },
  Navigate: {
    name: ICONS.navigate,
    size: 24,
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.darkFont,
  },
  Trips: {
    name: ICONS.trips,
    size: 24,
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.darkFont,
  },
  Profile: {
    name: ICONS.profile,
    size: 24,
    focusedColor: colors.spottiDark,
    unfocusedColor: colors.darkFont,
  },
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
  SportsArenas = 'Sports Arenas',
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

export const SAVED_TRIPS = [
  {
    title: 'Europe 2025',
    iconName: ICONS.spottiLogo,
  },
  {
    title: 'Sunriver Oct18',
    iconName: ICONS.spottiLogo,
  },
  {
    title: 'Stockholm',
    iconName: ICONS.spottiLogo,
  },
  {
    title: 'Santa Monica',
    iconName: ICONS.spottiLogo,
  },
  {
    title: 'Tampa',
    iconName: ICONS.spottiLogo,
  },
];

export const DEV_LOCATIONS = [
  {
    id: 1,
    name: 'Germany',
  },
  {
    id: 2,
    name: 'Spain',
  },
  {
    id: 3,
    name: 'France',
  },
  {
    id: 4,
    name: 'Greece',
  },
  {
    id: 5,
    name: 'Italy',
  },
  {
    id: 6,
    name: 'Sweden',
  },
  {
    id: 7,
    name: 'Finland',
  },
  {
    id: 8,
    name: 'Austria',
  },
  {
    id: 9,
    name: 'Croatia',
  },
  {
    id: 10,
    name: 'Denmark',
  },
  {
    id: 11,
    name: 'Ireland',
  },
  {
    id: 12,
    name: 'Australia',
  },
  {
    id: 13,
    name: 'Japan',
  },
  {
    id: 14,
    name: 'Iceland',
  },
  {
    id: 15,
    name: 'Canada',
  },
  {
    id: 16,
    name: 'Mexico',
  },
  {
    id: 17,
    name: 'South Korea',
  },
  {
    id: 18,
    name: 'United Kingdom',
  },
];

export const DEV_FRIENDS = [
  {
    id: 1,
    name: '@alexaaaxo',
  },
  {
    id: 2,
    name: '@christianJay',
  },
  {
    id: 3,
    name: '@travelJunkie2024',
  },
  {
    id: 4,
    name: '@oregonPlayer13',
  },
  {
    id: 5,
    name: '@user1235',
  },
];

export const HOTSPOTTI_NAME = ['HotSp', 'tti'];
export const HOTSPOTTI_SLOGAN = ['Be the local.'];

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

export const DEV_THREADS = [
  {
    id: 1,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
  {
    id: 2,
    author: 'alexaaaxo',
    authorProfilePic: 'alexa-headshot.png',
    body: 'Go early to avoid crowds. Pre-book tickets online for faster entry. For a magical experience, catch the nightly light show and enjoy views from the Champ de Mars.',
  },
  {
    id: 3,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: 'Take the stairs for a less crowded experience and unique views. Avoid peak hours in the afternoon. Explore nearby Seine River cruises for a scenic way to see the Eiffel Tower.',
  },
  {
    id: 4,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: 'Visit the Eiffel Tower at night for fewer crowds and a beautifully lit view. Bring binoculars for better sightseeing from the top, and explore nearby cafés for a true Parisian vibe.',
  },
  {
    id: 5,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
  {
    id: 6,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
  {
    id: 7,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
  {
    id: 8,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
  {
    id: 9,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
  {
    id: 10,
    author: 'christianJay12',
    authorProfilePic: 'christian-headshot.png',
    body: "Standing 1,083 feet tall, it's Paris’ iconic landmark. For the best experience, arrive early to avoid crowds, and book tickets online to skip long lines. Don’t miss the breathtaking views from the top – you can see all of Paris! Afterward, enjoy a picnic at Champ de Mars or explore nearby Seine River cruises. Don’t forget to visit the Tower at night when it lights up for a magical experience!",
  },
];
