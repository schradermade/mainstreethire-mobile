import React from "react";
import RoundActionButton from "../../ui/RoundActionButton";
import { View, StyleSheet, Text } from "react-native";
import { colors, fontSize, spacing } from "../../theme/theme";
import { useNavigation } from '@react-navigation/native';

const SavedListActionButtons = ({ listName }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Left-side buttons */}
      <View style={styles.leftSideButtons}>
        <RoundActionButton
          iconName={'arrow-left'}
          iconSize={22}
          iconColor={colors.offWhiteFont}
          onIconPress={() => navigation.goBack()}
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
          iconSize={22} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => console.log('sort pressed')}
        />
        <RoundActionButton 
          iconName={'dots-horizontal'} 
          iconSize={22} 
          iconColor={colors.offWhiteFont}
          onIconPress={() => console.log('dots pressed')}
          styling={styles.button}
        />
        {/* Add more buttons here if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    position: 'relative',
  },
  leftSideButtons: {
    zIndex: 2,
  },
  rightSideButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 2,
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,  
    justifyContent: 'center',
    alignItems: 'center', 
    width: 'auto'
  },
  titleText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
  },
  button: {
    marginLeft: spacing.large
  }
});

export default SavedListActionButtons;
