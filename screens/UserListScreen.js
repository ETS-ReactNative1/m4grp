import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Forest from "../components/Forest";

const NeighboursTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Forest />
    </View>
  );
};

const CountryTab = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Forest />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const UserListScreen = () => {
  return (
    <Tab.Navigator style={styles.tabs}>
      <Tab.Screen name="NÁGRENNI" component={NeighboursTab} />
      <Tab.Screen name="LANDIÐ" component={CountryTab} />
    </Tab.Navigator>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  tabs: {
    justifyContent: "center",
  },
});

/*import * as React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BackButton from "../components/BackButton";

function Neighbours({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Text>Jakobína Jakobsdóttir</Text>
      <Text>520 Stig</Text>
      <Button
        title="Sjá nánar"
        /*onPress={() => navigation.navigate('#')}*/
      /*/>
    </View>
  );
}

function Country() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hrafnhildur Björnsdóttir</Text>
      <Text>1070 Stig</Text>
      <Button
        title="Sjá nánar"
        /*onPress={() => navigation.navigate('BARRTRÉ')}*/
      /*/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function CommunityScreen() {
  return (
    <>
    <SafeAreaView>
    <BackButton backCircle={true} />
  </SafeAreaView>
    <NavigationContainer independent={true}>
      <Tab.Navigator style={styles.tabBar}>
        <Tab.Screen name="NÁGRENNI" component={Neighbours} />
        <Tab.Screen name="LANDIÐ" component={Country} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  tabs: {
    justifyContent: "center",
  },
});*/
