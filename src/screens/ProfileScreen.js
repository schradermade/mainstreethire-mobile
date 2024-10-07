import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import fetchUser from "../api/user";
import { Avatar } from 'react-native-elements';
import ScreenWrapper from "../components/ScreenWrapper";
import { colors, fontSize, iconSize, spacing } from "../theme/theme";
import RoundActionButton from "../ui/RoundActionButton";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <View style={styles.editButtonsContainer}>
          <RoundActionButton
            onIconPress={() => console.log('clicked cog icon')}
            iconName='cog'
            iconColor={colors.offWhiteFont} 
            iconSize={iconSize.small}
            // theme='dark'
            // styling={{marginRight: 100}} 
          />
          <RoundActionButton
            onIconPress={() => console.log('clicked dots icon')}
            iconName='dots-horizontal'
            iconColor={colors.offWhiteFont} 
            iconSize={iconSize.small}
            // theme='dark'
            // styling={{marginRight: 100}} 

          />
        </View>
        {loading ? (
          <Text>Loading...</Text> 
        )
        : (
            <>
              <Avatar
                rounded
                size="xlarge"
                source={require('../../assets/christian-headshot.png') }  // Replace with your image URL
                title={user.firstName} // If the image doesn't load, initials will be displayed
                containerStyle={{ backgroundColor: '#ccc' }}  // Placeholder color
              />
              <View style={styles.userInfoWrapper}>
                <Text style={styles.userNameFont}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.cityStateFont}>Portland, Oregon</Text>
              </View>
            </>
          )
        }
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.medium,
    // flex: 1
  },
  userInfoWrapper: {
    marginTop: spacing.medium
  },
  userNameFont: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xlarge
  },
  cityStateFont: {
    color: colors.darkFont,
    fontSize: fontSize.medium
  },
  editButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ProfileScreen;
