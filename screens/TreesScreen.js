import React from "react";
import { View, StyleSheet } from "react-native";
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
  return (
    <Tab.Navigator style={styles.tabs}>
      <Tab.Screen name="BARRTRÉ" component={ConiferTreesTab} />
      <Tab.Screen name="LAUFTRÉ" component={LeafyTreesTab} />
    </Tab.Navigator>
  );
};

export default TreesScreen;

const styles = StyleSheet.create({
  tabs: {
    justifyContent: "center",
  },
});
