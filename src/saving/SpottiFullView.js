// import React from "react";
// import { StyleSheet, View, ScrollView } from "react-native";
// import { spacing } from "../theme/theme";
// import { imagePathFormat } from "../utils/imagePathFormat";
// import ScreenWrapper from "../components/ScreenWrapper";
// import ActionButtons from "../components/SpottiFullView/ActionButtonsSection";
// import ImageCarousel from "../components/ImageCarousel";
// import TitleSection from "./TitleSection";
// import SpottiFullDescription from "./SpottiFullDescription";
// import Divider from "../ui/Divider";
// import SpottiRating from "../components/SpottiFullView/SpottiRatingSection";

// const SpottiFullView = ({ route }) => {
// const { spotti: { 
//   id, 
//   name,
//   tags,
//   rating, 
//   hoursofOperation, 
//   category, 
//   description, 
//   bestTimeToVisit, 
//   pictures
// } } = route.params || {};

//   return (
//     <ScreenWrapper style={styles.container}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Action Buttons */}
//         <View style={styles.sectionPadding}>
//           <ActionButtons name={name} id={id} />
//         </View>
//         {/* Image Carousel */}
//         <View style={styles.sectionPadding}>
//           <ImageCarousel images={imagePathFormat(pictures)} />
//         </View>
//         {/* Title Section */}
//         <View style={styles.sectionPadding}>
//           <TitleSection
//             title={name}
//             rating={rating}
//             category={category}
//             hoursofOperation={hoursofOperation}
//             bestTimeToVisit={bestTimeToVisit}
//             tags={tags}
//           />
//         </View>
//         <View style={styles.sectionPadding}>
//           <Divider />
//         </View>
//         {/* Spotti Full Description */}
//         <View style={styles.sectionPadding}>
//           <SpottiFullDescription description={description} />
//         </View>
//         {/* Spotti Rating */}
//         <View style={styles.sectionPadding}>
//           <SpottiRating rating={rating} />
//         </View>
//       </ScrollView>
//     </ScreenWrapper>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sectionPadding: {
//     paddingBottom: spacing.xlarge
//   },
// })

// export default SpottiFullView;