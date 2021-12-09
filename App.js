import React from "react";
import { SafeAreaView } from "react-native";
import Navigator from "./components/Navigator";
import { LogBox } from "react-native";

// Fonts
import { useFonts } from "expo-font";

// suppressing a warning that is showing because of some default options in expo
LogBox.ignoreLogs(["AsyncStorage"]);

export default App = () => {
  // Loading fonts
  let [fontsLoaded] = useFonts({
    degularDisplay: require("./assets/fonts/DegularDisplay-Light.otf"),
    poppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    poppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    );
  }
};
