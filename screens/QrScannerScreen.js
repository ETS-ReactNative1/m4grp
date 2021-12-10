import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import QrCodeScanner from "../components/QrCodeScanner";
import BackButton from "../components/BackButton";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const QrScannerScreen = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.scanbox}>{/* This is the scanbox */}</View>
        </View>
        <View style={styles.qrCodeTextContainer}>
          <Text style={styles.qrCodeText}>Skannaðu QR Kóðann hér</Text>
        </View>
      </View>
      <View style={styles.qrScannerCont}>
        <QrCodeScanner />
      </View>
    </>
  );
};

export default QrScannerScreen;

const styles = StyleSheet.create({
  body: {
    position: "relative",
    flex: 1,
    top: 0,
  },
  qrScannerCont: {
    alignItems: "center",
    bottom: windowHeight / 10,
  },
  qrCodeTextContainer: {
    alignItems: "center",
    top: windowHeight / 10,
    zIndex: 10,
  },
  qrCodeText: {
    color: "#fff",
    fontSize: 32,
    letterSpacing: 1.1,
    fontFamily: "degularDisplay",
  },
  backButtonContainer: {
    top: windowHeight / 30,
    zIndex: 10,
  },
  scanbox: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    height: windowHeight / 3,
    width: windowHeight / 3,
    top: windowHeight / 4,
    position: "absolute",
    zIndex: 10,
  },
});
