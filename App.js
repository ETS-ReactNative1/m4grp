// import React from "react";
// import Tabs from "./components/NavBar";

// export default App = () => {
//   return <Tabs />;
// };

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import NavBar from "./components/NavBar";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
