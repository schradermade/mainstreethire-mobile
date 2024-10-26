import React, { useState } from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors, fonts, fontSize, spacing } from '../../theme/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ICONS } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AiGenInsight from './AiGenInsight';

const Thread = ({ contributors }) => {
  const [voteCount, setVoteCount] = useState(0);
  const [isVotingDisabled, setIsVotingDisabled] = useState(false); // State to disable voting
  const imageMap = {
    'christian-headshot.png': require('../../../assets/christian-headshot.png'),
    'alexa-headshot.png': require('../../../assets/alexa-headshot.png'),
  };
  const handleVote = (voteChange) => {
    if (isVotingDisabled) return;
    setIsVotingDisabled(true);

    setVoteCount((prev) => {
      const newVoteCount = prev + voteChange;
      return newVoteCount < 0 ? 0 : newVoteCount;
    });

    setTimeout(() => {
      setIsVotingDisabled(false);
    }, 1000);
  };

  const renderThread = (item) => {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            size="small"
            source={imageMap[item.authorProfilePic]}
            title={'test-title'}
            containerStyle={{ backgroundColor: '#ccc' }}
          />
          <Text style={styles.profileName}>{item.author}</Text>
        </View>
        <Text style={styles.threadBody}>{item.body}</Text>
        <View style={styles.footerButtonsContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => console.log('added badge')}>
              <MaterialCommunityIcons
                name={ICONS.trophy}
                size={20}
                color={colors.darkFont}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => handleVote(1)}
              disabled={isVotingDisabled}
            >
              <MaterialCommunityIcons
                name={ICONS.upVote}
                size={25}
                color={colors.darkFont}
              />
            </TouchableOpacity>
            <Text style={styles.voteCount}>{voteCount}</Text>
            <TouchableOpacity
              onPress={() => handleVote(-1)}
              disabled={isVotingDisabled}
            >
              <MaterialCommunityIcons
                name={ICONS.downVote}
                size={25}
                color={colors.darkFont}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={contributors}
      keyExtractor={(thread) => `${thread.id}`}
      renderItem={({ item }) => renderThread(item)}
      showsVerticalScrollIndicator={true}
      scrollEnabled={true}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No Spottis Available</Text>
      }
      contentContainerStyle={styles.flatListContent}
      ListHeaderComponent={<AiGenInsight />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.medium,
  },
  flatListContent: {
    paddingHorizontal: spacing.large,
    paddingTop: spacing.large,
    paddingBottom: spacing.xxxxxlarge,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginLeft: spacing.small,
    fontSize: fontSize.medium,
    color: colors.offWhiteFont,
  },
  threadBody: {
    fontFamily: fonts.insightsRegular,
    lineHeight: 22,
    letterSpacing: 0.5,
    fontSize: fontSize.medium,
    color: colors.offWhiteFont,
    marginTop: spacing.small,
  },
  footerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.xxlarge,
  },
  voteCount: {
    marginHorizontal: spacing.small,
    fontSize: fontSize.medium,
    color: colors.darkFont,
    fontFamily: fonts.bold,
  },
});

export default Thread;
