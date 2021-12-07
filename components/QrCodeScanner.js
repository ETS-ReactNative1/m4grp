import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Icon, Touca} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QrCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Congratiolation you scanned a box! ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
  <>
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject, styles.cameraContainer}

      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  </>
  );
};

export default QrCodeScanner;

const styles = StyleSheet.create({
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%", 
    width: 1000,
    overflow: "hidden", 
    borderRadius: 30,
    backgroundColor: "white",
  },
});
