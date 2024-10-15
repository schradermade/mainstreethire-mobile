import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { spacing } from "../../theme/theme";
import Divider from "../../ui/Divider";

const ExpandTileGroup = ({ children }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isExpanded: expandedCard === index,
          onExpand: () => handleExpand(index),
        });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.small,
  },
});
export default ExpandTileGroup;
