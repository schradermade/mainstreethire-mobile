import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchSpottis from "../../api/spotti";
import SpottiList from "../Spotti/SpottiList";
import ScreenWrapper from "../ScreenWrapper";
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
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    spottiApi();
  }, []);

  return (
    <ScreenWrapper>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View style={styles.actionButtonsContainer}>
            <SavedListActionButtons listName={list.title} />
          </View>
          <SpottiList spottis={spottis} />
        </>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    zIndex: 1,
  },
});
export default SavedList;
