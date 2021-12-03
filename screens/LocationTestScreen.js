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

  // Takes in a string with the format of hh:mm:ss and returns the value in seconds
  const convertHMSToSeconds = (hms) => {
    hms = hms.split(":");
    return +hms[0] * 60 * 60 + hms[1] * 60 + +hms[2];
  };

  // Takes in a string with the format of hh:mm AM/PM, and returns the value in hh:mm in 24h land
  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes, seconds] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    const hms = `${hours}:${minutes}:${seconds}`;

    return convertHMSToSeconds(hms);
  };

  const currentTimeToSeconds = () => {
    let d = new Date();
    let datetext = d.toTimeString();
    datetext = datetext.split(" ")[0];

    return convertHMSToSeconds(datetext);
  };

  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  let sunSet = "Getting location data...";
  let sunRise = "Getting location data...";
  let sunSetSecs;
  let percentOfDay;
  if (errorMsg) {
    sunSet = errorMsg;
  } else if (sunData) {
    sunSet = String(sunData.sunset);
    sunSetSecs = convertTime12to24(sunSet);
    percentOfDay = percentage(currentTimeToSeconds(), sunSetSecs);
    console.log(percentOfDay);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>percent of day {percentOfDay}</Text>
    </View>
  );
};

export default LocationTestScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    backgroundColor: "green",
  },
  paragraph: {
    padding: 20,
    color: "white",
  },
});
