
// ---------- THIS IS THE START SCREEN ---------- \\
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,

} from "react-native";
import { auth } from "../config/firebase";
// Fonts
import {useFonts} from "expo-font"
import {AppLoading} from "expo-app-loading"

import FraeLogo from "../components/Images/FraeLogo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("App");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  
  // For fonts
  let [fontsLoaded] = useFonts({
    "bungee": require("./../assets/fonts/Bungee.ttf"),
    "bungeeHairline": require("./../assets/fonts/BungeeHairline.ttf"),
    "degularDisplay": require("./../assets/fonts/DegularDisplay-Light.otf"),
  })
  
  return (
    <View style={styles.body}>
      <View style={styles.logo}>
        <FraeLogo />
      </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress= {() => {
            navigation.navigate("Login")
          }}

          style={styles.SignInButton}>
              <Text 
                style={styles.SignInButtonText}> 
              Log in
              </Text>
          </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => {
                      navigation.navigate("SignUp")
                    }}
                    style={styles.SignUpButton}>
              <Text 
                style={styles.SignUpButtonText}> 
              Sign up
              </Text>
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
  },   SignInButtonText: {
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
  },   SignUpButtonText: {
        fontFamily: "degularDisplay",
        color: "#FFFDF6",
        fontSize: 28,
        marginLeft: 10,
  },

});
