import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ScoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Score Screen</Text>
      <Button title="Click here" onPress={() => alert("Score screen alert")} />
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
