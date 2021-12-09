import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../config/firebase";
import PointsArea from "../components/PointsArea";
import Sun from "../components/Sun";

// Icons
import { Icon } from "react-native-elements";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.userCont}>
        <Image
          style={styles.userImg}
          source={require("../assets/placeholder.png")}
        />
        <Text style={styles.decorativeH1}>{auth.currentUser?.email}!</Text>
        <Text style={styles.decorativeH2}>Staðsetning Þín</Text>
      </View>
      <PointsArea points={120} boxes={12} />
      <Image
        style={styles.treeIlu}
        source={require("../assets/Tree.png")}
      ></Image>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("QrScanner");
        }}
        style={styles.QrBtn}
      >
        <Icon
          name="qr-code-scanner"
          type="materialIcons"
          color="#3A5046"
          size={55}
        />
      </TouchableOpacity>
      <Sun />
    </View>
  );
};

export default HomeScreen;

// Stylesheet
const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDF6",
    marginTop: 0,
    zIndex: 1,
    flex: 1,
  },
  userCont: {
    alignItems: "center",
    marginTop: 30,
    zIndex: 1,
  },
  userImg: {
    width: 150,
    height: 150,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  decorativeH1: {
    fontFamily: "degularDisplay",
    letterSpacing: 2,
    marginTop: 20,
    color: "#3A5046",
    fontSize: 32,
    lineHeight: 43,
    textAlign: "left",
    zIndex: 1,
  },
  decorativeH2: {
    marginTop: 5,
    fontFamily: "degularDisplay",
    color: "#939393",
    fontSize: 20,
    lineHeight: 29,
    fontWeight: "normal",
    textAlign: "left",
    zIndex: 1,
  },
  treeIlu: {
    zIndex: 1,
  },
  buttonContainer: {
    flex: 3,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: "flex-end",
    zIndex: 2,
  },
  QrBtn: {
    bottom: 40,
    backgroundColor: "#FFFDF6",
    borderColor: "#3A5046",
    borderWidth: 4,
    borderRadius: 99,
    height: 90,
    width: 90,
    justifyContent: "center",
    zIndex: 1,
  },
});
