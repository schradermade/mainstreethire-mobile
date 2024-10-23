import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, fontSize, colors } from '../../theme/theme';
import { Avatar } from 'react-native-elements';

const TopContributors = ({ topContributors }) => {
  const topThree = topContributors.slice(0, 3);
  const imageMap = {
    'christian-headshot.png': require('../../../assets/christian-headshot.png'),
    'alexa-headshot.png': require('../../../assets/alexa-headshot.png'),
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.topContribText}>Top Spotters</Text>
        <View style={styles.contributorAvatarContainer}>
          {topThree.map((contributor, index) => (
            <View
              key={index}
              style={[
                styles.avatarWrapper,
                { zIndex: topThree.length + index },
              ]}
            >
              <Avatar
                rounded
                size="small"
                source={imageMap[contributor.authorProfilePic]} // Replace with your image URL
                title={contributor.author[0]} // If the image doesn't load, initials will be displayed
                containerStyle={styles.avatar} // Placeholder color
              />
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contributorAvatarContainer: {
    flexDirection: 'row',
  },
  avatarWrapper: {
    marginLeft: -10,
    flexDirection: 'row',
  },
  avatar: {
    backgroundColor: '#ccc',
  },
  topContribText: {
    fontFamily: fonts.regular,
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
  },
});

export default TopContributors;
