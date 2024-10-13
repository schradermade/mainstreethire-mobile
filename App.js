import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { colors } from "./src/theme/theme";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Updated import
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";

enableScreens();

const App = () => {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container} edges={["top"]}>
          <AppNavigator />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
});

export default App;
