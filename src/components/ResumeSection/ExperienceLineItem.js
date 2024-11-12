import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, fontSize, spacing } from '../../theme/theme';

const ExperienceLineItem = ({ item }) => {
  const { name, location, dateRange, position } = item;

  return (
    <View style={styles.container}>
      <View style={styles.nameDateContainer}>
        <Text style={[styles.text, styles.name]}>{name}</Text>
        <Text style={[styles.text, styles.dateRange]}>{dateRange}</Text>
      </View>
      <View>
        {/* <Text style={[styles.text, styles.location]}>{location}</Text> */}
        <Text style={[styles.text, styles.location]}>{position}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.xlarge,
  },
  nameDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.darkFont,
    fontFamily: fonts.semiBold,
  },
  name: {
    fontSize: fontSize.large,
  },
  location: {
    fontSize: fontSize.medium,
  },
  dateRange: {
    fontSize: fontSize.medium,
  },
});

export default ExperienceLineItem;
