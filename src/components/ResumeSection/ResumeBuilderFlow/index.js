import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors, fonts, fontSize, spacing } from '../../../theme/theme';
import ActionButton from '../../../ui/ActionButton';
import { ICONS } from '../../../constants';
import SlideUpModal from '../../SlideUpModal';

const ResumeBuilder = ({ isModalVisible, setModalVisible }) => {
  const renderModalHeader = () => (
    <Text style={styles.headerText}>
      Resume Builder
      <View>
        <MaterialCommunityIcons
          name={ICONS.wrench}
          size={32}
          color={colors.spottiDark}
          style={{ paddingLeft: spacing.xsmall }}
        />
      </View>
    </Text>
  );
  return (
    <SlideUpModal
      isVisible={isModalVisible}
      setVisible={setModalVisible}
      modalHeader={renderModalHeader}
    >
      <>
        <View>
          <Text style={styles.subHeaderText}>
            Complete your resume to unlock job applications.
          </Text>
          <View style={styles.tipContainer}>
            <Text style={styles.tipWordText}>
              Tip
              <View>
                <MaterialCommunityIcons
                  name={ICONS.lightBulbOn}
                  size={18}
                  color={colors.darkFont}
                  style={{ paddingLeft: spacing.xxsmall }}
                />
              </View>
            </Text>
            <Text style={styles.tipBodyText}>
              Finish Contact and Experience first to improve AI suggestions for
              Summary and Skills.
            </Text>
          </View>
        </View>

        <View style={styles.builderLineItems}>
          <View style={styles.builderLineItem}>
            <View style={styles.actionButtonContainer}>
              <ActionButton
                buttonText={'Contact'}
                leftIcon={ICONS.accountDetails}
                rightIcon={ICONS.plus}
                labelText={'1 min'}
              />
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={ICONS.timelineCheck}
                size={40}
                color={'#008000'}
              />
            </View>
          </View>

          <View style={styles.builderLineItem}>
            <View style={styles.actionButtonContainer}>
              <ActionButton
                buttonText={'Experience'}
                leftIcon={ICONS.list}
                rightIcon={ICONS.plus}
                labelText={'5 min'}
              />
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={ICONS.timelineEmpty}
                size={40}
                color={colors.mediumGray}
              />
            </View>
          </View>

          <View style={styles.builderLineItem}>
            <View style={styles.actionButtonContainer}>
              <ActionButton
                buttonText={'Summary'}
                leftIcon={ICONS.commentAccount}
                rightIcon={ICONS.plus}
                labelText={'A.I. Gen suggestions'}
              />
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={ICONS.timelineEmpty}
                size={40}
                color={colors.mediumGray}
              />
            </View>
          </View>

          <View style={styles.builderLineItem}>
            <View style={styles.actionButtonContainer}>
              <ActionButton
                buttonText={'Skills'}
                leftIcon={ICONS.commentAccount}
                rightIcon={ICONS.plus}
                labelText={'A.I. Gen suggestions'}
              />
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={ICONS.timelineEmpty}
                size={40}
                color={colors.mediumGray}
              />
            </View>
          </View>
        </View>
      </>
    </SlideUpModal>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.xxxlarge,
    color: colors.spottiDark,
    alignSelf: 'center',
  },
  subHeaderText: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.large,
    color: colors.offWhiteFont,
    alignSelf: 'flex-start',
    paddingTop: spacing.small,
  },
  builderLineItems: {
    width: '100%',
    paddingTop: spacing.xxxxlarge,
  },
  builderLineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xxxlarge,
  },
  actionButtonContainer: {
    flex: 1,
  },
  iconContainer: {
    paddingLeft: spacing.xxlarge,
    top: 10,
  },
  tipBodyText: {
    fontFamily: fonts.regular,
    fontSize: fontSize.medium,
    color: colors.darkFont,
  },
  tipContainer: {
    paddingTop: spacing.large,
  },
  tipWordText: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.large,
    color: colors.darkFont,
    alignSelf: 'start',
    // marginBottom: spacing.xsmall,
  },
});

export default ResumeBuilder;
