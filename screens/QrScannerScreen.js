import React from "react";
import { 
  Button, 
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import QrCodeScanner from "../components/QrCodeScanner";
import BackButton from "../components/BackButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useFonts} from "expo-font"


// Icons
import { Icon } from 'react-native-elements';



const Tab = createBottomTabNavigator();

const QrScannerScreen = () => {
  const navigation = useNavigation();
    // For fonts
  let [fontsLoaded] = useFonts({
     "bungee": require("./../assets/fonts/Bungee.ttf"),
     "bungeeHairline": require("./../assets/fonts/BungeeHairline.ttf"),
     "degularDisplay": require("./../assets/fonts/DegularDisplay-Light.otf"),
  })

  return (
    <View style={styles.body}>
      <TouchableOpacity 
        onPress={() => {
          navigation.replace("App");
          }}
        style={styles.backButtonContainer}>
        <View style={styles.backButton}>
        <Icon 
          name='chevron-left'
          type='font-awesome'
          color='#fff'
          size = {28}
        />
        <Text
          style={styles.buttonText}
        >
          Til baka
        </Text>
        </View>
      </TouchableOpacity>
      <View
        style={styles.qrCodeTextContainer}
      >
        <Text
          style={styles.qrCodeText}
        >
          Skannaðu QR Kóðann hér
        </Text> 
      </View>
        <View style={styles.scanbox}>
        {/* This is the scanbox */} 
        </View>
    </View>
    <View style={styles.qrScannerCont}>  
      <QrCodeScanner/>
    </View>
  );
};


export default QrScannerScreen;

const styles = StyleSheet.create({
  body: {
    position: "relative",
    alignItems: "center", 
    flex: 1,
  },
  qrScannerCont: {
    alignItems: "center",
  },
  qrCodeTextContainer: {
    alignItems: "center",
    top: 290,
    zIndex: 10,
    position: "absolute",
  },
  qrCodeText: {
    color: "#fff",
    fontSize: 32,
    letterSpacing: 1.1,
    fontFamily: "degularDisplay",
  },
  backButtonContainer: {
    right: "65%",
    position: "absolute",
    top: 100,
    zIndex: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
  }, buttonText: {
    marginLeft: 12,
    color: "#fff",
    fontSize: 26,
    letterSpacing: 1.5,
    fontFamily: "degularDisplay",
  },
  scanbox: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    height: 317,
    width: 317,
    top: 350,
    position: "absolute",
    zIndex: 10,
  }, scanboxCont: {
  }
});
