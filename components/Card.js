import React from "react";
import { useFonts } from "expo-font";
import { Text, View, Image, StyleSheet } from "react-native";

const CardComponent = (props) => {
  const [loaded] = useFonts({
    Bungee: require("../assets/fonts/Bungee.ttf"),
    BungeeHairline: require("../assets/fonts/BungeeHairline.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
        <Text style={styles.decorativeH1}>{props.title}</Text>
        <Text style={styles.decorativeH2}>{props.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template: {
    borderColor: "#3A5046",
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
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

export default CardComponent;
