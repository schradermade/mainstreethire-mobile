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
  mainStreetHireLogo = 'store',
  carWash = 'car-wash',
  gasStation = 'gas-station-outline',
  coffeeShop = 'coffee-outline',
  groceryStore = 'cart-variant',
  bakery = 'chef-hat',
  restaurant = 'food-steak',
  fastFood = 'food-outline',
  autoRepair = 'car-wrench',
  laundryService = 'tumble-dryer',
  petGrooming = 'dog',
  fitnessCenter = 'weight-lifter',
  daycareCenter = 'account-child-circle',
  bookstore = 'bookshelf',
  hardwareStore = 'hammer-wrench',
  florist = 'flower-tulip-outline',
  realEstateOffice = 'home-outline',
  convenienceStore = 'storefront-outline',
  landscaping = 'grass',
  gardenCenter = 'tree-outline',
  cleaningServices = 'broom',
  nearby = 'map-marker-radius-outline',
  medicalClinic = 'hospital-box-outline',
  insuranceAgency = 'home-flood',
}

export const BOTTOM_TAB_ICONS = {
  Jobs: {
    name: ICONS.mainStreetHireLogo,
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
  CarWash = 'Car Wash',
  GasStation = 'Gas Station',
  CoffeeShop = 'Coffee Shop',
  GroceryStore = 'Grocery Store',
  Bakery = 'Bakery',
  Restaurant = 'Restaurant',
  FastFood = 'Fast Food',
  AutoRepair = 'Auto Repair',
  LaundryService = 'Laundry Service',
  PetGrooming = 'Pet Grooming',
  FitnessCenter = 'Fitness Center',
  DaycareCenter = 'Daycare Center',
  Bookstore = 'Bookstore',
  HardwareStore = 'Hardware Store',
  Florist = 'Florist',
  RealEstateOffice = 'Real Estate Office',
  ConvenienceStore = 'Convenience Store',
  GardenCenter = 'Garden Center',
  Landscaping = 'Landscaping',
  CleaningServices = 'Cleaning Services',
  MedicalClinic = 'Medical Clinic',
  InsuranceAgency = 'Insurance Agency',
}

export const CATEGORY_LIST = [
  {
    title: Category.Nearby,
    iconName: ICONS.nearby,
  },
  {
    title: Category.CarWash,
    iconName: ICONS.carWash,
  },
  {
    title: Category.GasStation,
    iconName: ICONS.gasStation,
  },
  {
    title: Category.CoffeeShop,
    iconName: ICONS.coffeeShop,
  },
  {
    title: Category.GroceryStore,
    iconName: ICONS.groceryStore,
  },
  {
    title: Category.Bakery,
    iconName: ICONS.bakery,
  },
  {
    title: Category.Restaurant,
    iconName: ICONS.restaurant,
  },
  {
    title: Category.FastFood,
    iconName: ICONS.fastFood,
  },
  {
    title: Category.AutoRepair,
    iconName: ICONS.autoRepair,
    // drama-masks
  },
  {
    title: Category.LaundryService,
    iconName: ICONS.laundryService,
  },
  {
    title: Category.PetGrooming,
    iconName: ICONS.petGrooming,
  },
  {
    title: Category.FitnessCenter,
    iconName: ICONS.fitnessCenter,
  },
  {
    title: Category.DaycareCenter,
    iconName: ICONS.daycareCenter,
  },
  {
    title: Category.Bookstore,
    iconName: ICONS.bookstore,
  },
  {
    title: Category.HardwareStore,
    iconName: ICONS.hardwareStore,
  },
  {
    title: Category.Florist,
    iconName: ICONS.florist,
  },
  {
    title: Category.RealEstateOffice,
    iconName: ICONS.realEstateOffice,
  },
  {
    title: Category.ConvenienceStore,
    iconName: ICONS.convenienceStore,
  },
  {
    title: Category.GardenCenter,
    iconName: ICONS.gardenCenter,
  },
  {
    title: Category.Landscaping,
    iconName: ICONS.landscaping,
  },
  {
    title: Category.CoffeeShop,
    iconName: ICONS.coffee,
  },
  {
    title: Category.CleaningServices,
    iconName: ICONS.cleaningServices,
  },
  {
    title: Category.MedicalClinic,
    iconName: ICONS.medicalClinic,
  },
  {
    title: Category.InsuranceAgency,
    iconName: ICONS.insuranceAgency,
  },
];

export const SAVED_TRIPS = [
  {
    title: 'Europe 2025',
    iconName: ICONS.mainStreetHireLogo,
  },
  {
    title: 'Sunriver Oct18',
    iconName: ICONS.mainStreetHireLogo,
  },
  {
    title: 'Stockholm',
    iconName: ICONS.mainStreetHireLogo,
  },
  {
    title: 'Santa Monica',
    iconName: ICONS.mainStreetHireLogo,
  },
  {
    title: 'Tampa',
    iconName: ICONS.mainStreetHireLogo,
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

export const MAINSTREETHIRE_NAME = 'Main Street Hire';
export const MAINSTREETHIRE_SLOGAN = 'Local jobs.';

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
