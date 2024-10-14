import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Animated, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors, fontSize, iconSize, spacing, fonts } from "../../theme/theme";
import RoundActionButton from "../../ui/RoundActionButton";
import { ICONS } from "../../constants";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef(null);

  const [dynamicPlaceholder, setDynamicPlaceholder] = useState("Spottis"); // Dynamic portion
  const placeholders = ["Spottis", "Cities"]; // List of dynamic placeholders
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(50)).current; // Initial position of the text
  const opacityValue = useRef(new Animated.Value(0)).current; // Initial opacity

  const handleArrowLeftClick = () => {
    setIsFocused(false);
    textInputRef.current.blur();
  };

  const handleMapIconClick = () => {
    setIsFocused(true);
    textInputRef.current.focus();
  };

  useEffect(() => {
    // Set an interval to change the dynamic part of the placeholder every 2 seconds
    if (!term) {
      // Only run if term is empty
      const intervalId = setInterval(() => {
        slideInPlaceholder();
        // Update dynamic placeholder text index
        setPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % placeholders.length
        );
      }, 3500);

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [term]);

  useEffect(() => {
    setDynamicPlaceholder(placeholders[placeholderIndex]); // Update dynamic placeholder value
  }, [placeholderIndex]);

  const slideInPlaceholder = () => {
    // Reset animation values
    animatedValue.setValue(50); // Start the text from below the view
    opacityValue.setValue(0); // Make text initially invisible

    // Create the slide-in animation
    Animated.timing(animatedValue, {
      toValue: 0, // Slide to the original position
      duration: 1000, // Animation duration (1.0 seconds)
      useNativeDriver: true,
    }).start();

    // Fade in the opacity
    Animated.timing(opacityValue, {
      toValue: 1, // Fully visible
      duration: 1000, // Match the slide animation duration
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.container, isFocused && styles.focusedInput]}>
      <View style={styles.iconsContainer}>
        {isFocused ? (
          <TouchableOpacity activeOpacity={0.7} onPress={handleArrowLeftClick}>
            <MaterialCommunityIcons
              name={"arrow-left"}
              size={24}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.7} onPress={handleMapIconClick}>
            <MaterialCommunityIcons
              name={"map-search"}
              size={24}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          ref={textInputRef}
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.inputStyle]}
          placeholder="" // managing placeholder manually with Text component
          placeholderTextColor={colors.placeholderText}
          value={term}
          selectionColor={colors.white}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.placeholderWrapper}>
          {/* Only show placeholder if term is empty */}
          {term === "" && (
            <>
              <Text style={styles.staticText}>Find </Text>
              <Animated.View
                style={[
                  styles.dynamicTextWrapper,
                  {
                    transform: [{ translateY: animatedValue }],
                    opacity: opacityValue,
                  },
                ]}
                pointerEvents="none"
              >
                <Text style={styles.dynamicText}>{dynamicPlaceholder}</Text>
              </Animated.View>
            </>
          )}
        </View>
      </View>
      {term.length >= 1 && (
        <RoundActionButton
          onIconPress={() => onTermChange("")}
          iconName={ICONS.close}
          iconColor={colors.darkFont}
          iconSize={iconSize.xsmall}
          styling={{
            borderWidth: 1.25,
            borderColor: colors.darkFont,
            marginHorizontal: spacing.medium,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryColor,
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center", // Align items to center vertically
    marginTop: spacing.small,
    marginBottom: spacing.large,
    marginHorizontal: spacing.xxlarge,
  },
  inputStyle: {
    flex: 1,
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    zIndex: 10000,
  },
  inputWrapper: {
    flex: 1,
    position: "relative", // To overlay the Text components over the TextInput
    justifyContent: "center",
    overflow: "hidden", // Ensure the animated text doesn't overflow outside the box
  },
  placeholderWrapper: {
    position: "absolute",
    flexDirection: "row", // "Find" and animated text in the same row
    alignItems: "center", // Vertically center the text
  },
  staticText: {
    color: colors.darkFont,
    fontSize: fontSize.large,
    fontFamily: fonts.regular,
  },
  dynamicTextWrapper: {
    // This wrapper is for the animated text
  },
  dynamicText: {
    color: colors.darkFont,
    fontSize: fontSize.large,
    fontFamily: fonts.bold,
  },
  iconsContainer: {
    width: 60,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
    color: colors.offWhiteFont,
  },
  focusedInput: {
    borderColor: colors.spottiDark,
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default SearchBar;

{
  /* <Octicons name="arrow-left" size={24} style={styles.iconStyle} onPress={handleArrowLeftClick} /> */
}
{
  /* <Octicons name="search" size={24} style={styles.iconStyle} /> */
}
