// ---------- THIS IS THE LOGIN SCREEN ---------- \\
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { auth } from "../config/firebase";
// Icons
import { Icon } from "react-native-elements";

import Betulaleaf from "../components/Images/Betulaleaf";

const windowWidth = Dimensions.get("window").width;

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

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  console.log(windowWidth);

  return (
    <View style={styles.body}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.headerText}> Log in with </Text>

        <View style={styles.hyperlinkButtons}>
          <TouchableOpacity style={styles.soMeButtons}>
            <View style={styles.iconContainer}>
              <Icon name="facebook" type="font-awesome" color="#30361E" />
            </View>
            <Text style={styles.soMeButtonText}>facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.soMeButtons}>
            <View style={styles.iconContainer}>
              <Icon name="google" type="font-awesome" color="#30361E" />
            </View>
            <Text style={styles.soMeButtonText}>google</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.emailLoginText}>Or log in with Email</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <View style={styles.loginContainer}>
              <Icon
                name="arrow-right"
                type="font-awesome"
                color="#30361E"
                size={35}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.hyperlinkContainer}>
          <Text> New? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={[styles.hyperlink]}>Click here</Text>
          </TouchableOpacity>
          <Text> To sign up! </Text>
        </View>
      </KeyboardAvoidingView>
      <View style={[styles.betulaleaf, { left: windowWidth - 150 }]}>
        {/* Leaf */}
        <Betulaleaf />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  betulaleaf: {
    transform: [{ rotateY: "0deg" }, { rotateZ: "-69.72deg" }],
    position: "absolute",
    marginTop: 75,
  },
  body: {
    backgroundColor: "#30361E",
    flex: 1,
  },
  container: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FFFDF6",
    flex: 1,
    alignItems: "center",
    marginTop: 210,
  },
  headerText: {
    color: "#30361E",
    fontFamily: "degularDisplay",
    fontSize: 40,
    marginTop: 60,
  },
  emailLoginText: {
    marginTop: 100,
    color: "rgba(48, 54, 30, 1)",
    fontFamily: "degularDisplay",
    fontSize: 24,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "80%",
  },
  input: {
    backgroundColor: "#FFFDF6",
    color: "#30361E",
    fontFamily: "degularDisplay",
    fontSize: 18,
    borderWidth: 2,
    marginBottom: 15,
    height: 60,
    width: 400,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 16,
    marginTop: 5,
  },
  button: {
    marginLeft: 320,
    marginTop: 10,
    alignItems: "center",
  },
  loginContainer: {
    justifyContent: "center",
    borderColor: "#30361E",
    color: "#30361E",
    borderWidth: 2.6,
    borderRadius: 99,
    height: 80,
    width: 80,
  },
  hyperlinkContainer: {
    marginTop: 60,
    flexDirection: "row",
    fontFamily: "degularDisplay",
  },
  hyperlink: {
    color: "#30361E",
    fontWeight: "bold",
  },
  hyperlinkButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    borderColor: "#30361E",
    borderWidth: 2,
    borderRadius: 99,
    height: 40,
    width: 40,
    justifyContent: "center",
  },
  soMeButtons: {
    fontFamily: "degularDisplay",
    backgroundColor: "#FFFDF6",
    borderColor: "#30361E",
    color: "#30361E",
    borderWidth: 2.3,
    height: 55,
    width: 190,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 99,
    alignItems: "center",
    paddingLeft: 6,
    flexDirection: "row",
  },
  soMeButtonText: {
    fontFamily: "degularDisplay",
    color: "#30361E",
    fontSize: 22,
    letterSpacing: 1.5,
    marginLeft: 10,
  },
});
