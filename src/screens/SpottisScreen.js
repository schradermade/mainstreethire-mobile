import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import SearchBar from '../components/SpottiSection/SearchBar';
import CategoryList from '../components/SpottiSection/Category/CategoryList';
import SpottiList from '../components/Spotti/SpottiList';
import ScreenWrapper from '../components/ScreenWrapper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SpottiTile from '../components/Spotti/SpottiTile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpottis } from '../redux/slices/spottiSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const SpottiScreen = () => {
  const [term, setTerm] = useState('');

  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {
    data: spottis,
    loading,
    error,
  } = useSelector((state) => state.spotti);

  console.log('SPOTTIS_IN_SLICE!!:', JSON.stringify(spottis, null, 2));

  useEffect(() => {
    dispatch(fetchSpottis({ limit: 20, offset: 0 }));
  }, [dispatch]);

  const loadMoreSpottis = () => {
    dispatch(fetchSpottis({ limit: 10, offset: spottis.length }));
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
        // onTermSubmit={spottiApi}
      />
      <CategoryList />
      {error ? (
        <Text>Error loading Spottis: {error.messages || error}</Text>
      ) : loading ? (
        <LoadingSpinner label={'Loading Spottis...'} />
      ) : (
        <SpottiList spottis={spottis} TileComponent={SpottiTile} />
      )}
    </ScreenWrapper>
  );
};

export default SpottiScreen;
