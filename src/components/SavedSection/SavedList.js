import React, { useState, useEffect } from "react";
import { Text } from "react-native";
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
          <SavedListActionButtons listName={list.title} />
          <SpottiList spottis={spottis} />
        </>
      )}
    </ScreenWrapper>
  );
};

export default SavedList;
