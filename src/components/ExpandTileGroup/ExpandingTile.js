import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { colors, spacing, borderRadius, shadowRadius } from '../../theme/theme';
import CancelButton from '../../ui/CancelButton';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get('window').height;

const ExpandingTile = ({
  ExpandedContent,
  NotExpandedContent,
  isExpanded, // Receive the expanded state from parent
  onExpand, // Handle expansion from parent
}) => {
  const insets = useSafeAreaInsets();

  const calculateExpandedTileHeight =
    screenHeight -
    insets.top -
    40 - // height of SavedTripActionButtons
    spacing.xlarge - // marginBottom of SavedTripActionButtons
    90 - // height of notExpandedContainer * 2
    spacing.medium * 2 - // marginBottom on each ExpandingTile
    insets.bottom;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {!isExpanded ? (
          <TouchableOpacity
            style={styles.notExpandedContainer}
            onPress={onExpand}
            activeOpacity={1}
          >
            <NotExpandedContent />
          </TouchableOpacity>
        ) : (
          <Animated.View
            style={[
              styles.expandedContainer,
              {
                height: calculateExpandedTileHeight,
              },
            ]}
          >
            <View style={styles.closeButtonWrapper}>
              <CancelButton onPress={onExpand} />
            </View>
            <ExpandedContent />
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLightColor,
    borderRadius: borderRadius.large,
    borderColor: colors.mediumGray,
    borderWidth: 0.17,
    marginBottom: spacing.medium,
    shadowColor: colors.shadowEffectBlack,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: shadowRadius.xsmall,
  },
  expandedContainer: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    overflow: 'hidden',
  },
  notExpandedContainer: {
    paddingHorizontal: spacing.medium,
    height: 45,
    justifyContent: 'center',
  },
  closeButtonWrapper: {
    position: 'absolute',
    top: spacing.medium,
    right: spacing.medium,
    zIndex: 1,
  },
});

export default ExpandingTile;
