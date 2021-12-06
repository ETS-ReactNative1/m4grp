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

// suppressing a warning that is showing because of some default options in expo
LogBox.ignoreLogs(["AsyncStorage"]);

const Stack = createNativeStackNavigator();


export default App = () => {

  return (
    <NavigationContainer>
<<<<<<< HEAD
      
       <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}>  

=======
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
>>>>>>> 3ea9852bcf9487a8f3093cccaaccfa79e53d7a2d
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen name="App" component={NavBar} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="QrScanner" component={QrCodeScannerScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
