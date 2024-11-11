import React from 'react';
import { StyleSheet, View } from 'react-native';
import TagTile from './TagTile';
import { spacing } from '../../theme/theme';

const TagList = ({ tags }) => {
  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <TagTile key={index} tag={tag} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: -spacing.small,
  },
});

export default TagList;
