import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import PickingCards from "../components/PickingCards";

const TreeInfoScreen = (route) => {
  const { title, content } = route.route.params;
  console.log(route);

  return (
    <View>
      <View style={{ backgroundColor: "#30361E" }}>
        <BackButton />
        <Text style={{ fontSize: 40, color: "#FFFDF6" }}>{title}</Text>
      </View>
      <PickingCards
        pickingProgress={"Tynsla"}
        pickingProgressStatus={"onGoing"}
        months={"mai-sept"}
      />
      <View style={styles.contentArea}>
        <View>
          <Text>{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default TreeInfoScreen;

const styles = StyleSheet.create({
  contentArea: {},
});
