import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, fonts, fontSize } from '../../../theme/theme';
import ExpandingTile from '../../ExpandTileGroup/ExpandingTile';
import TextInputBox from '../../../ui/TextInputBox';
import { USERS } from '../../../development-entities';
import UsersList from './UsersList';

const ExpandedContent = () => {
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.expandedContainer}>
      <Text style={styles.sectionLabel}>Who's coming?</Text>
      <Text style={styles.subHeaderText}>Invite friends to your trip!</Text>

      <View style={styles.inputBoxWrapper}>
        <TextInputBox
          value={location}
          onChangeText={setLocation}
          placeholder={'Search friends'}
          placeholderTextColor={colors.placeholderText}
          returnKeyType="done"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          colorTheme="dark"
          // labelText={"Saved locations populate relevant Spottis"}
        />
        <Text style={styles.savedLocationsText}>
          Friends collaborating on this trip.
        </Text>
      </View>
      <View style={styles.locationListContainer}>
        <UsersList list={USERS} />
      </View>
    </View>
  );
};

const NotExpandedContent = () => {
  return (
    <View style={styles.notExpandedWrapper}>
      <Text style={styles.sectionLabel}>Who</Text>
      <Text style={styles.notExpandedText}>Germany, Croatia, Italy...</Text>
    </View>
  );
};

const WhoCard = ({ isExpanded, onExpand }) => {
  return (
    <ExpandingTile
      ExpandedContent={ExpandedContent}
      NotExpandedContent={NotExpandedContent}
      isExpanded={isExpanded}
      onExpand={onExpand}
    />
  );
};

const styles = StyleSheet.create({
  notExpandedWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notExpandedText: {
    color: '#E0E0E0',
    fontFamily: fonts.regular,
    fontSize: fontSize.large,
  },
  locationListContainer: {
    paddingHorizontal: spacing.small,
  },
  expandedContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputBoxWrapper: {
    marginTop: spacing.medium,
    borderBottomColor: colors.borderColorDark,
    borderBottomWidth: 0.17,
  },
  sectionLabel: {
    color: '#E0E0E0',
    fontSize: fontSize.xlarge,
    fontFamily: fonts.regular,
  },
  subHeaderText: {
    alignSelf: 'center',
    marginTop: spacing.medium,
    fontSize: fontSize.medium,
    fontFamily: fonts.regular,
    color: colors.offWhiteFont,
  },
  savedLocationsText: {
    fontSize: fontSize.medium,
    color: colors.darkFont,
    fontFamily: fonts.regular,
    alignSelf: 'center',
    paddingTop: spacing.medium,
    paddingBottom: spacing.xsmall,
  },
});

export default WhoCard;
