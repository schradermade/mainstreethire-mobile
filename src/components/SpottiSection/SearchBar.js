import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Animated, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  colors,
  fontSize,
  iconSize,
  spacing,
  fonts,
  iconColor,
} from "../../theme/theme";
import RoundActionButton from "../../ui/RoundActionButton";
import { ICONS } from "../../constants";
import FilterButton from "../FilterButton";

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
    if (!term) {
      const intervalId = setInterval(() => {
        slideInPlaceholder();
        setPlaceholderIndex(
          (prevIndex) => (prevIndex + 1) % placeholders.length
        );
      }, 3500);

      return () => clearInterval(intervalId);
    }
  }, [term]);

  useEffect(() => {
    setDynamicPlaceholder(placeholders[placeholderIndex]);
  }, [placeholderIndex]);

  const slideInPlaceholder = () => {
    animatedValue.setValue(50);
    opacityValue.setValue(0);

    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, isFocused && styles.focusedInput]}>
        <View style={styles.iconsContainer}>
          {isFocused ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleArrowLeftClick}
            >
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
      <FilterButton />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row", // Ensure the SearchBar and filter icon are side by side
    alignItems: "center", // Vertically align items
    marginHorizontal: spacing.xxlarge,
    marginTop: spacing.small,
    marginBottom: spacing.medium,
  },
  container: {
    backgroundColor: colors.primaryLightColor,
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  inputStyle: {
    flex: 1,
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
  },
  inputWrapper: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    overflow: "hidden",
  },
  placeholderWrapper: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  staticText: {
    color: colors.darkFont,
    fontSize: fontSize.large,
    fontFamily: fonts.regular,
  },
  dynamicTextWrapper: {},
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
