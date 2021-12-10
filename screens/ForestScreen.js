import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BackButton from "../components/BackButton";

const windowHeight = Dimensions.get("window").height;

const ForestScreen = (route) => {
  const { title, content } = route.route.params;
  console.log(route);

  return (
    <View style={{ backgroundColor: "#30361E", height: "100%" }}>
      <View style={{ top: 16, left: 16 }}>
        <BackButton />
      </View>
      <View
        style={{
          fontSize: 40,
          color: "#FFFDF6",
          justifyContent: "center",
          alignItems: "center",
          top: windowHeight / 3.5,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "#FFFDF6",
          }}
        >
          Forest
        </Text>
        <Text style={{ textAlign: "center", color: "#FFFDF6" }}>
          Use your imagination
        </Text>
      </View>
    </View>
  );
};

export default ForestScreen;

const styles = StyleSheet.create({
  contentArea: {},
});
