import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  spacing,
  colors,
  fontSize,
  fonts,
  shadowRadius,
} from '../../theme/theme';
import PhoneNumber from '../PhoneNumber';
import Divider from '../../ui/Divider';
import TagList from '../Tag/TagList';
import ExperienceList from './ExperienceList';

const Resume = ({ data }) => {
  const {
    firstName = '',
    lastName = '',
    phoneNumber = '',
    location = '',
    summary = '',
    candidateSkills = [],
    experienceItems = [],
  } = data;
  return (
    <>
      <View style={styles.userInfoWrapper}>
        <Avatar
          rounded
          size="large"
          source={require('../../../assets/christian-headshot.png')} // Replace with your image URL
          title={`${firstName[0]}.${lastName[0]}.`} // If the image doesn't load, initials will be displayed
          containerStyle={styles.avatar} // Placeholder color
        />
        <View style={styles.userInfoContainer}>
          <View>
            <Text style={styles.firstLastNameText}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.cityStateFont}>{location}</Text>
          </View>
          <PhoneNumber phone={phoneNumber} />
        </View>
      </View>
      <Divider />
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.resumeScrollContainer}
      >
        <View style={styles.resumeSection}>
          <Text style={styles.sectionLabel}>Summary</Text>
          <Text style={styles.cityStateFont}>{summary}</Text>
        </View>
        <View style={styles.resumeSection}>
          <Text style={styles.sectionLabel}>Skills</Text>
          <TagList tags={candidateSkills} />
        </View>
        <View style={styles.resumeSection}>
          <Text style={styles.sectionLabel}>Experience</Text>
          <ExperienceList experienceItems={experienceItems} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    // backgroundColor: '#ccc',
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: shadowRadius.small,
  },
  userInfoContainer: {
    marginLeft: spacing.large,
    justifyContent: 'space-between',
    flex: 1,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    padding: spacing.medium,
  },
  firstLastNameText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xlarge,
    fontFamily: fonts.regular,
  },
  cityStateFont: {
    color: colors.darkFont,
    fontSize: fontSize.medium,
    fontFamily: fonts.regular,
  },
  sectionLabel: {
    color: colors.offWhiteFont,
    fontSize: fontSize.large,
    fontFamily: fonts.semiBold,
    paddingBottom: spacing.xsmall,
  },
  resumeSection: {
    marginBottom: spacing.large,
  },
  resumeScrollContainer: {
    paddingTop: spacing.medium,
    paddingHorizontal: spacing.medium,
  },
});

export default Resume;
