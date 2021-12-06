import React from "react";
import { View, StyleSheet } from "react-native";
import SignOutBtn from "../components/SignOutBtn";

const UsersScreen = () => {
  return (
    <View style={styles.container}>
      <SignOutBtn />
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
