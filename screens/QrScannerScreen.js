import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import QrCodeScanner from "../components/QrCodeScanner";

const QrScannerScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button
        title={"Back"}
        onPress={() => {
          navigation.replace("App");
        }}
      />
      <QrCodeScanner />
    </>
  );
};

export default QrScannerScreen;
