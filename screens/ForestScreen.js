import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";


const ForestScreen = (route) => {
  const { title, content } = route.route.params;
  console.log(route);

  return (
    <View>
      <Text style={{ fontSize: 40, color: "black", marginTop: 300, marginLeft: 130, }}>Forest</Text>
    </View>
  );
};

export default ForestScreen;

const styles = StyleSheet.create({
  contentArea: {},
});
