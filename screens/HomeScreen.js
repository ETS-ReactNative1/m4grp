import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { auth } from "../config/firebase";
import PointsArea from "../components/PointsArea";
import Sun from "../components/Sun";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.decorativeH1}>WELCOME BACK</Text>
      <Text style={styles.decorativeH2}>{auth.currentUser?.email}!</Text>
      <PointsArea points={100} boxes={10} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("QrScanner");
          }}
          style={styles.QrBtn}
        >
          <Text style={styles.QrBtnText}>QR</Text>
        </TouchableOpacity>
      </View>
      <Sun />
    </SafeAreaView>
  );
};

export default HomeScreen;

// Stylesheet
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
  QrBtn: {
    backgroundColor: "#fff",
    borderColor: "#3A5046",
    borderWidth: 2,
    borderRadius: 40,
    height: 50,
    width: 50,
    marginTop: 10,
    justifyContent: "center",
  },
  QrBtnText: {
    color: "#3A5046",
    textAlign: "center",
  },
});
