import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UserListItem from "../components/UserListItem";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";

const NeighboursTab = () => {
  return (
    <ScrollView>
      <View>
        <UserListItem userName="Jakobína Jakobsdóttir" points="520" />
        <UserListItem userName="Angelíka Fálkadóttir" points="430" />
        <UserListItem userName="Katrín Svanhólmsdóttir" points="160" />
        <UserListItem userName="Sigfús Pétursson" points="110" />
        <UserListItem userName="Finnur Brekason" points="80" />
        <UserListItem userName="Gyða Steingrímsdóttir" points="50" />
        <UserListItem userName="Lúðvík Böðvarsson" points="40" />
        <UserListItem userName="Dagbjört Jónsdóttir" points="20" />
        <UserListItem userName="Steinar Bjartmarsson" points="10" />
      </View>
    </ScrollView>
  );
};

const CountryTab = () => {
  return (
    <ScrollView>
      <View>
        <UserListItem userName="Hrafnhildur Björnsdóttir" points="1070" />
        <UserListItem userName="Bergur Dagsson" points="980" />
        <UserListItem userName="Kristín Tryggvadóttir" points="640" />
        <UserListItem userName="Jakobína Jakobsdóttir" points="520" />
        <UserListItem userName="Hermann Jónsson" points="510" />
        <UserListItem userName="Berglind Finnsdóttir" points="430" />
        <UserListItem userName="Ólafur Örn Másson" points="360" />
        <UserListItem userName="Sigfús Pétursson" points="110" />
        <UserListItem userName="Finnur Brekason" points="80" />
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

const UserListScreen = () => {
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
        <Text style={styles.headerText}>Samfélagið</Text>
      </View>
      <View style={styles.aboveTabs}></View>
      <Tab.Navigator screenOptions={screenOptions} style={styles.tabs}>
        <Tab.Screen
          style={styles.tabs}
          name="NÁGRENNI"
          component={NeighboursTab}
        />
        <Tab.Screen name="LANDIÐ" component={CountryTab} />
      </Tab.Navigator>
    </>
  );
};

export default UserListScreen;

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
