import React from "react";
import { View, Image,} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import ScoreScreen from "../screens/ScoreScreen";
import UsersScreen from "../screens/UsersScreen";

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
            style={{
              backgroundColor: focused ? "#3A5046" : "#FFFDF6",
              height: 50,
              width: 78,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
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
        name="Score"
        component={ScoreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              backgroundColor: focused ? "#3A5046" : "#FFFDF6",
              height: 50,
              width: 78,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
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
            style={{
              backgroundColor: focused ? "#3A5046" : "#FFFDF6",
              height: 50,
              width: 78,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
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
        name="Users"
        component={UsersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              backgroundColor: focused ? "#3A5046" : "#FFFDF6",
              height: 50,
              width: 78,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
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



