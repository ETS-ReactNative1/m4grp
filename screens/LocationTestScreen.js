import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

const LocationTestScreen = () => {
  const [location, setLocation] = useState(null);
  const [sunData, setSunData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location != null) {
      fetch(
        `https://api.sunrise-sunset.org/json?lat=${location.coords.latitude}&lng=-${location.coords.longitude}`
      )
        .then((response) => response.json())
        .then((data) => setSunData(data.results));
    }
  }, [location]);

  let sunSet = "Getting location data...";
  let sunRise = "Getting location data...";
  if (errorMsg) {
    sunSet = errorMsg;
  } else if (sunData) {
    sunRise = String(sunData.sunrise);
    sunSet = String(sunData.sunset);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Sunrise is at: {sunRise}</Text>
      <Text style={styles.paragraph}>Sunset is at: {sunSet}</Text>
    </View>
  );
};

export default LocationTestScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
  },
  paragraph: {
    padding: 20,
  },
});
