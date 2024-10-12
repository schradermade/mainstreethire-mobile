import React from 'react'
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import { spacing, colors, fontSize } from '../../theme/theme';

const UserProfileSummary = () => {
  return (
    <>
      <Avatar
        rounded
        size="xlarge"
        source={require('../../../assets/christian-headshot.png') }  // Replace with your image URL
        title={'test-title'} // If the image doesn't load, initials will be displayed
        containerStyle={{ backgroundColor: '#ccc' }}  // Placeholder color
      />
      <View style={styles.userInfoWrapper}>
        <Text style={styles.userNameFont}>{'Christian'} {'Schrader'}</Text>
        <Text style={styles.cityStateFont}>Portland, Oregon</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  userInfoWrapper: {
    marginTop: spacing.medium
  },
  userNameFont: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xlarge
  },
  cityStateFont: {
    color: colors.darkFont,
    fontSize: fontSize.medium
  },
});

export default UserProfileSummary;
