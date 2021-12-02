import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import NavBar from "./components/NavBar";
import QrCodeScannerScreen from "./screens/QrScannerScreen";
import { LogBox } from "react-native";

// suppressing a warning that is showing because of some default options in expo
LogBox.ignoreLogs(["AsyncStorage"]);

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="App" component={NavBar} />
        <Stack.Screen name="QrScanner" component={QrCodeScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
