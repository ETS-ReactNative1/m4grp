import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import Card from "../components/Card";

const userName = "Michelle Scott";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    subtitle: "First Item sub",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    subtitle: "Second Item sub",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    subtitle: "Third Item sub",
  },
];

const HomeScreen = () => {
  const [loaded] = useFonts({
    Bungee: require("../assets/fonts/Bungee.ttf"),
    BungeeHairline: require("../assets/fonts/BungeeHairline.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const renderCards = ({ item }) => {
    <Card title={item.title} subtitle={item.subtitle} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.decorativeH1}>WELCOME BACK</Text>
      <Text style={styles.decorativeH2}>{userName}!</Text>
      <FlatList
        data={DATA}
        renderItem={renderCards}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight || 0,
  },
  decorativeH1: {
    fontFamily: "Bungee",
    fontStyle: "normal",
    color: "#3A5046",
    fontSize: 36,
    lineHeight: 43,
    textAlign: "left",
  },
  decorativeH2: {
    fontFamily: "Bungee",
    fontStyle: "normal",
    color: "#3A5046",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: "left",
  },
});
