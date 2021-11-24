import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { IconButton } from "../components";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

const HomeScreen = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.decorativeH1}>WELCOME BACK</Text>
      <Text style={styles.decorativeH2}>{user.email}!</Text>
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
    fontStyle: "normal",
    color: "#3A5046",
    fontSize: 36,
    lineHeight: 43,
    textAlign: "left",
  },
  decorativeH2: {
    fontStyle: "normal",
    color: "#3A5046",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: "left",
  },
});
