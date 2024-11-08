import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, fontSize, fonts } from '../../theme/theme';

const UserProfileSummary = ({ firstName, lastName }) => {
  return (
    <>
      <Avatar
        rounded
        size="xlarge"
        source={require('../../../assets/christian-headshot.png')} // Replace with your image URL
        title={'test-title'} // If the image doesn't load, initials will be displayed
        containerStyle={{ backgroundColor: '#ccc' }} // Placeholder color
      />
      <View style={styles.userInfoWrapper}>
        <Text style={styles.userNameFont}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.cityStateFont}>Portland, Oregon</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userInfoWrapper: {
    marginTop: spacing.medium,
  },
  userNameFont: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xlarge,
    fontFamily: fonts.regular,
  },
  cityStateFont: {
    color: colors.darkFont,
    fontSize: fontSize.medium,
    fontFamily: fonts.regular,
  },
});

export default UserProfileSummary;
