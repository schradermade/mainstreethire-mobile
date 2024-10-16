import React, { useState } from "react";
import SearchBar from "../components/SpottiSection/SearchBar";
import spotti from "../api/spotti";
import CategoryList from "../components/SpottiSection/Category/CategoryList";
import SpottiList from "../components/Spotti/SpottiList";
import ScreenWrapper from "../components/ScreenWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SpottiTile from "../components/Spotti/SpottiTile";

const SpottiScreen = () => {
  const [term, setTerm] = useState("");
  const [spottis, setSpottis] = useState([]);
  const insets = useSafeAreaInsets();

  const spottiApi = async () => {
    const response = await spotti.get();
    setSpottis(response.data);
  };

  return (
    <ScreenWrapper
      screenStyles={{
        paddingTop: insets.top,
      }}
    >
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={spottiApi}
      />
      <CategoryList />
      <SpottiList spottis={spottis} TileComponent={SpottiTile} />
    </ScreenWrapper>
  );
};

export default SpottiScreen;
