import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import fetchUser from "../api/user";
import ScreenWrapper from "../components/ScreenWrapper";
import { spacing } from "../theme/theme";
import ProfileActionButtons from "../components/ProfileSection/ProfileActionButtons";
import UserProfileSummary from "../components/ProfileSection/UserProfileSummary";

const ProfileScreen = () => {
const [user, setUser] = useState();
const [loading, setLoading] = useState(true);  // To handle loading state

const userApi = async () => {
  try {
    const response = await fetchUser.get();
    setUser(response.data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  } finally {
    setLoading(false)
  }
}

useEffect(() => {
  userApi();
}, [])

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ProfileActionButtons />
        {loading ? 
          <Text>Loading...</Text> 
          : <UserProfileSummary />
        }
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.large,
    marginHorizontal: spacing.xxlarge,
  },
});

export default ProfileScreen;
