import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TreeInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tree Info Screen</Text>
      <Button title="Click here" onPress={() => alert("Tree info screen alert")} />
    </View>
  );
};

export default TreeInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});