import * as React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const ConiferTreesTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Conifer Trees</Text>
    </View>
  );
};

const LeafyTreesTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Leafy Trees</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const TreeInfoScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator style={styles.tabs}>
        <Tab.Screen name="BARRTRÉ" component={ConiferTreesTab} />
        <Tab.Screen name="LAUFTRÉ" component={LeafyTreesTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TreeInfoScreen;

const styles = StyleSheet.create({
  tabs: {
    justifyContent: "center",
  },
});
