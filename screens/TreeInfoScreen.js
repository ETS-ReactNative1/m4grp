import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function ConiferTreesTab({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Conifer Trees</Text>
      <Button
        title="Go to Leafy Trees"
        onPress={() => navigation.navigate('LAUFTRÉ')}
      />
    </View>
  );
}

function LeafyTreesTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Leafy Trees</Text>
      <Button
        title="Go to Leafy Trees"
        onPress={() => navigation.navigate('BARRTRÉ')}
      />
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
    backgroundColor: "red",
  },
  tabBar: {
  }
});
