import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const UsersScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Users Screen</Text>
      <Button title="Click here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
