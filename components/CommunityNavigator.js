import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserListScreen from "../screens/UserListScreen";
import ForrestScreen from "../screens/ForrestScreen";

const Stack = createNativeStackNavigator();

const CommunityNavigator = () => {
  return (
    <Stack.Navigator
      independent="true"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="Forrest" component={ForrestScreen} />
    </Stack.Navigator>
  );
};

export default CommunityNavigator;
