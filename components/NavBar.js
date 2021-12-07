import React from "react";
import { View, Image, Settings } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import TreeInfoScreen from "../screens/TreeInfoScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/navbarIcons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#848A59" : "#3A5046",
                }}
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
            <View>
              <Image
                source={require("../assets/navbarIcons/tree.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#848A59" : "#3A5046",
                }}
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
            <View>
              <Image
                source={require("../assets/navbarIcons/map.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#848A59" : "#3A5046",
                }}
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
            <View>
              <Image
                source={require("../assets/navbarIcons/cog.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#848A59" : "#3A5046",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
