// ---------- THIS IS THE START SCREEN ---------- \\
import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../config/firebase";

import FraeLogo from "../components/Images/FraeLogo";

const LoginScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("App");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <FraeLogo />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.SignInButton}
        >
          <Text style={styles.SignInButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.SignUpButton}
        >
          <Text style={styles.SignUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#30361E",
    flex: 1,
  },
  logo: {
    marginTop: 250,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  SignInButton: {
    backgroundColor: "#FFFDF6",
    borderColor: "#30361E",
    borderWidth: 2.3,
    height: 60,
    width: 190,
    marginBottom: 15,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  SignInButtonText: {
    fontFamily: "degularDisplay",
    color: "#30361E",
    fontSize: 28,
    marginLeft: 10,
  },
  SignUpButton: {
    backgroundColor: "#30361E",
    borderColor: "#FFFDF6",
    borderWidth: 2.3,
    height: 60,
    width: 190,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  SignUpButtonText: {
    fontFamily: "degularDisplay",
    color: "#FFFDF6",
    fontSize: 28,
    marginLeft: 10,
  },
});
