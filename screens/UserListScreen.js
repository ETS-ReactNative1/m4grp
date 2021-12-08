import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserListItem from "../components/UserListItem";
import { ScrollView } from "react-native-gesture-handler";

const NeighboursTab = () => {
  return (
    <ScrollView>
    <View>
      <UserListItem userName="Jakobína Jakobsdóttir" points="520"/>
      <UserListItem userName="Angelíka Fálkadóttir" points="430"/>
      <UserListItem userName="Katrín Svanhólmsdóttir" points="160"/>
      <UserListItem userName="Sigfús Pétursson" points="110"/>
      <UserListItem userName="Finnur Brekason" points="80"/>
      <UserListItem userName="Gyða Steingrímsdóttir" points="50"/>
      <UserListItem userName="Lúðvík Böðvarsson" points="40"/>
      <UserListItem userName="Dagbjört Jónsdóttir" points="20"/>
      <UserListItem userName="Steinar Bjartmarsson" points="10"/>
    </View>
    </ScrollView>
  );
};

const CountryTab = () => {
  return (
    <ScrollView>
    <View>
      <UserListItem userName="Hrafnhildur Björnsdóttir" points="1070"/>
      <UserListItem userName="Bergur Dagsson" points="980"/>
      <UserListItem userName="Kristín Tryggvadóttir" points="640"/>
      <UserListItem userName="Jakobína Jakobsdóttir" points="520"/>
      <UserListItem userName="Hermann Jónsson" points="510"/>
      <UserListItem userName="Berglind Finnsdóttir" points="430"/>
      <UserListItem userName="Ólafur Örn Másson" points="360"/>
      <UserListItem userName="Sigfús Pétursson" points="110"/>
      <UserListItem userName="Finnur Brekason" points="80"/>
    </View>
    </ScrollView>
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
