import React from "react";
import { View, Image, StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import TreeInfoScreen from "../screens/TreeInfoScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Icons
import { Icon } from 'react-native-elements'

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false, 
      tabBarStyle: { 
        position: 'relative',
        evaluation: 0,
        backgroundColor: "#FFFDF6", 
        height: 75,
      },
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={[styles.navbar, {backgroundColor: focused ? "#3A5046" : "#FFFDF6"}]}
            > 
              <Icon
                name="home"
                type="entypo"
                color={focused ? "#FFFDF6" : "#3A5046"}
                size={35}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TreeInfo"
        component={TreeInfoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={[styles.navbar, {backgroundColor: focused ? "#3A5046" : "#FFFDF6"}]}
            > 
              <Icon
                name="tree"
                type="font-awesome-5"
                color={focused ? "#FFFDF6" : "#3A5046"}
                size={40}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={[styles.navbar, {backgroundColor: focused ? "#3A5046" : "#FFFDF6"}]}
            >
              <Icon
                name="map-marked-alt"
                type="font-awesome-5"
                color={focused ? "#FFFDF6" : "#3A5046"}
                size={38}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={[styles.navbar, {backgroundColor: focused ? "#3A5046" : "#FFFDF6"}]}
            >
              <Icon
                name="cog"
                type="font-awesome-5"
                color={focused ? "#FFFDF6" : "#3A5046"}
                size={38}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    width: 78,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});


