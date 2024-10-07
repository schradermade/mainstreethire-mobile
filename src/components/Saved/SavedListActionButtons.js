import React, { useState } from "react";
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet, Text } from "react-native";
import { colors, fontSize, iconSize, spacing } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';
import SavedListEditModal from "./SavedListEditModal";

const SavedListActionButtons = ({ listName }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Left-side buttons */}
      <View style={styles.leftSideButtons}>
        <RoundActionButton
          iconName={'arrow-left'}
          iconSize={iconSize.small}
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.goBack()}
          styling={styles.button}
        />
      </View>
      {/* Centered title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {listName}
        </Text>
      </View>
      {/* Right-side buttons */}
      <View style={styles.rightSideButtons}>
        <RoundActionButton 
          iconName={'sort'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => console.log('sort pressed')}
          styling={[styles.button, {marginLeft: spacing.large}]}
        />
        <RoundActionButton 
          iconName={'dots-horizontal'} 
          iconSize={iconSize.small} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => setModalVisible(true)}
          styling={[styles.button, {marginLeft: spacing.large}]}
        />
      </View>
      <SavedListEditModal 
        isVisible={isModalVisible}
        setVisible={setModalVisible}
        title={listName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.large,
    marginHorizontal: spacing.xxlarge,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  leftSideButtons: {
    zIndex: 2,
  },
  rightSideButtons: {
    flexDirection: 'row',
    zIndex: 2,
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,  
    alignItems: 'center', 
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
  },
  button: {
    backgroundColor: colors.primaryColor
  },
});

export default SavedListActionButtons;
