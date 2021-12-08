import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../config/firebase";
import PointsArea from "../components/PointsArea";
import Sun from "../components/Sun";

  // Icons
  import { Icon } from 'react-native-elements'


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
    <SafeAreaView style={styles.container}>
    <View style={styles.userCont}>
      <View style={styles.userImg}>
        <Image
        style={{
          width: 150,
          height: 150 ,
          borderRadius: 99,
          alignItems: "center",
          justifyContent: "center",
        }}
        source={require("../assets/placeholder.png")}
        >
        </Image>
      </View>
      <Text style={styles.decorativeH1}>{auth.currentUser?.email}!</Text>
      <Text style={styles.decorativeH2}>Staðsetning Þín</Text>
    </View>
      <PointsArea points={120} boxes={12} />
      <Image
      style={styles.treeIlu}
      source={require("../assets/Tree.png")}
    ></Image>
      <View style={styles.buttonContainer}>
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
      </View>
      <Sun/>
    </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

// Stylesheet
const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDF6",
    marginTop: StatusBar.currentHeight || 0,
    zIndex: 1,
  },
  userCont: {
    alignItems: "center",
  },
  userImg: {
    borderRadius: 99,
    marginTop: 30,
    height: 150,
    width: 150,
    zIndex: 1,
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
    marginTop: 100,
    justifyContent: "flex-end",
    zIndex: 2,

  },
  QrBtn: {
    marginBottom: 40,
    backgroundColor: "#FFFDF6",
    borderColor: "#3A5046",
    borderWidth: 4,
    borderRadius: 99,
    height: 90,
    width: 90,
    justifyContent: "center",
  },
});
