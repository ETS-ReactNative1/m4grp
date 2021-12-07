import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function ConiferTreesTab({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Conifer Trees</Text>
    </View>
  );
}

function LeafyTreesTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Leafy Trees</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TreeInfoScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator style={styles.tabBar}>
        <Tab.Screen name="BARRTRÉ" component={ConiferTreesTab} />
        <Tab.Screen name="LAUFTRÉ" component={LeafyTreesTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabs: {
    justifyContent: "center",
  },
});
