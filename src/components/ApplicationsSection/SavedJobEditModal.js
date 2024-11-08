// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Animated, Modal, Dimensions } from "react-native";
// import { borderRadius, colors, iconSize, spacing } from "../../theme/theme";
// import { PanGestureHandler, State } from "react-native-gesture-handler";
// import RoundActionButton from "../../ui/RoundActionButton";
// import EditModalContents from "./EditModalContents";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { ICONS } from "../../constants";

// const { height } = Dimensions.get("window");
// const MIN_TRANSLATE_Y = 100; // Modal should not go above this (100px below the top)

// const SavedTripEditModal = ({ isVisible, setVisible, title }) => {
//   const translateY = useState(new Animated.Value(height))[0]; // Initialize translateY
//   const lastGestureY = useState(new Animated.Value(0))[0]; // To track the last gesture Y position

//   useEffect(() => {
//     if (isVisible) {
//       openModal();
//     }
//   }, [isVisible]);

//   const openModal = () => {
//     // Reset translateY and lastGestureY when the modal opens
//     lastGestureY.setValue(0);
//     translateY.setValue(height);
//     Animated.timing(translateY, {
//       toValue: MIN_TRANSLATE_Y, // Bring it up to 100px below the top
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const closeModal = () => {
//     Animated.timing(translateY, {
//       toValue: height, // Slide back down to the bottom
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setVisible(false);
//       translateY.setValue(height); // Reset position after close
//     });
//   };

//   const onGestureEvent = Animated.event(
//     [{ nativeEvent: { translationY: lastGestureY } }],
//     { useNativeDriver: true }
//   );

//   const onHandlerStateChange = ({ nativeEvent }) => {
//     if (nativeEvent.state === State.END) {
//       const dragThreshold = 100; // Distance needed to trigger closing
//       const newTranslateY =
//         nativeEvent.translationY + nativeEvent.velocityY * 0.1; // Factor in velocity

//       if (newTranslateY > dragThreshold) {
//         closeModal(); // Close modal if pulled down enough
//       } else {
//         // Ensure the modal stays at least 100px below the top
//         Animated.spring(translateY, {
//           toValue: MIN_TRANSLATE_Y, // Snap back to 100px from the top
//           useNativeDriver: true,
//         }).start();
//       }
//     }
//   };

//   return (
//     <Modal
//       transparent
//       visible={isVisible}
//       animationType="none"
//       onRequestClose={closeModal}
//     >
//       <View style={styles.modalBackground}>
//         <TouchableOpacity
//           style={StyleSheet.absoluteFillObject}
//           onPress={closeModal}
//           activeOpacity={1}
//         />
//         <PanGestureHandler
//           onGestureEvent={onGestureEvent}
//           onHandlerStateChange={onHandlerStateChange}
//         >
//           <Animated.View
//             style={[
//               styles.modalContainer,
//               {
//                 transform: [
//                   {
//                     translateY: translateY.interpolate({
//                       inputRange: [MIN_TRANSLATE_Y, height],
//                       outputRange: [MIN_TRANSLATE_Y, height],
//                       extrapolate: "clamp", // Prevent modal from going above 100px
//                     }),
//                   },
//                 ],
//               },
//             ]}
//           >
//             <View style={styles.modalHandle} />
//             <View style={styles.closeButtonWrapper}>
//               <RoundActionButton
//                 iconName={ICONS.close}
//                 iconSize={iconSize.small}
//                 iconColor={colors.offWhiteFont}
//                 onIconPress={closeModal}
//               />
//             </View>
//             <EditModalContents tripName={title} />
//           </Animated.View>
//         </PanGestureHandler>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalBackground: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   modalContainer: {
//     height: height - 30,
//     borderTopLeftRadius: borderRadius.large,
//     borderTopRightRadius: borderRadius.large,
//     padding: spacing.large,
//     backgroundColor: colors.primaryModalColor,
//   },
//   closeButtonWrapper: {
//     alignSelf: "flex-end",
//   },
//   modalHandle: {
//     height: 5,
//     width: 30,
//     borderRadius: 25,
//     backgroundColor: colors.borderColorDark,
//     alignSelf: "center",
//   },
// });

// export default SavedTripEditModal;
