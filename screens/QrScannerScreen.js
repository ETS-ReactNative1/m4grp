import React from "react";
import { Text, StyleSheet, View } from "react-native";
import QrCodeScanner from "../components/QrCodeScanner";
import BackButton from "../components/BackButton";

const QrScannerScreen = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.backButtonContainer}>
          <BackButton style={styles.backButtonContainer} />
        </View>
        <View style={styles.qrCodeTextContainer}>
          <Text style={styles.qrCodeText}>Skannaðu QR Kóðann hér</Text>
        </View>
        <View style={styles.scanbox}>{/* This is the scanbox */}</View>
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
  scanbox: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    height: 317,
    width: 317,
    top: 350,
    position: "absolute",
    zIndex: 10,
  },
});
