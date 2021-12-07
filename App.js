import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StartScreen from "./screens/StartScreen";
import QrCodeScannerScreen from "./screens/QrScannerScreen";
import CommunityScreen from "./screens/CommunityScreen";
import NavBar from "./components/NavBar";
import { LogBox } from "react-native";

// Fonts
import { useFonts } from "expo-font";

// suppressing a warning that is showing because of some default options in expo
LogBox.ignoreLogs(["AsyncStorage"]);

const Stack = createNativeStackNavigator();


export default App = () => {
  // Loading fonts
  let [fontsLoaded] = useFonts({
    bungee: require("./assets/fonts/Bungee.ttf"),
    bungeeHairline: require("./assets/fonts/BungeeHairline.ttf"),
    degularDisplay: require("./assets/fonts/DegularDisplay-Light.otf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="App" component={NavBar} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="QrScanner" component={QrCodeScannerScreen} />
          <Stack.Screen name="Community" component={CommunityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
