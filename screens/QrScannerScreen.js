import React from "react";
import QrCodeScanner from "../components/QrCodeScanner";
import BackButton from "../components/BackButton";

const QrScannerScreen = () => {
  return (
    <>
      <BackButton />
      <QrCodeScanner />
    </>
  );
};

export default QrScannerScreen;
