import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ConiferTrees from "../components/ConiferTrees";
import LeafyTrees from "../components/LeafyTrees";

const ConiferTreesTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ConiferTrees />
    </View>
  );
};

const LeafyTreesTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LeafyTrees />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const TreesScreen = () => {
  const screenOptions = {
    tabBarActiveTintColor: "#FFFDF6",
    tabBarInactiveTintColor: "#30361E",
    tabBarIndicatorStyle: {
      backgroundColor: "#30361E",
      height: "100%",
      borderRadius: 20,
    },
    pressOpacity: 1,
    tabBarStyle: {
      backgroundColor: "#FFFDF6",
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 20,
    },
  };
  return (
    <>
      <View style={styles.topElement}>
        <Text style={styles.headerText}>Fróðleikur</Text>
      </View>
      <View style={styles.aboveTabs}></View>
      <Tab.Navigator screenOptions={screenOptions} style={styles.tabs}>
        <Tab.Screen name="BARRTRÉ" component={ConiferTreesTab} />
        <Tab.Screen name="LAUFTRÉ" component={LeafyTreesTab} />
      </Tab.Navigator>
    </>
  );
};

export default TreesScreen;

const styles = StyleSheet.create({
  topElement: {
    height: 150,
    backgroundColor: "#30361E",
    marginBottom: -20,
  },

  headerText: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 30,
    color: "#FFFDF6",
  },

  aboveTabs: {
    height: 40,
    backgroundColor: "#FFFDF6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabs: {
    backgroundColor: "#FFFDF6",
  },
});
