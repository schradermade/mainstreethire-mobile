import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors, fontSize, spacing } from "../../theme/theme";
import fetchSpottis from '../../api/spotti';
import SpottiList from "../Spotti/SpottiList";
import ScreenWrapper from "../ScreenWrapper";
import ActionButtonsSection from "../SpottiFullView/SpottiActionButtons";
import SavedListActionButtons from "./SavedListActionButtons";

const SavedList = ({ route }) => {
  const { list } = route.params;
  const [loading, setLoading] = useState(true);
  const [spottis, setSpottis] = useState();

  const spottiApi = async () => {
    try {
      const response = await fetchSpottis.get();
      setSpottis(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    spottiApi();
  }, [])

  return (
    <ScreenWrapper>
      {loading ? (
          <Text>Loading...</Text>
        )
      : (
          <>
            <View style={styles.actionButtons}>
              <SavedListActionButtons listName={list.title}/>
            </View>
            <View style={styles.container}>
              <SpottiList spottis={spottis} />
            </View>
          </>
        )
      }
    </ScreenWrapper>  
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  actionButtons: {
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.large
  }
})

export default SavedList;