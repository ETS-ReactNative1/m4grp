import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import * as Location from "expo-location";

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

const Sun = () => {
  const [location, setLocation] = useState(null);
  const [sunData, setSunData] = useState(null);
  const [percentOfDay, setPercentOfDay] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [sunDisplay, setSunDisplay] = useState("none");

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

  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  let sunSet = "Getting location data...";
  let sunSetSecs;
  useEffect(() => {
    if (sunData) {
      sunSet = String(sunData.sunset);
      sunSetSecs = convertTime12to24(sunSet);
      const data = percentage(currentTimeToSeconds(), sunSetSecs);
      console.log(data);
      setPercentOfDay(data);
      setSunDisplay("block");
    }
  }, [sunData]);

  const styles = {
    container: {
      position: "absolute",
      display: sunDisplay,
      top: Math.abs(percentOfDay - 50) * 8,
      left: percentOfDay * 2,
      width: 300,
      height: 300,
    },
  };

  return (
    <Image
      style={styles.container}
      source={require("../assets/sun.png")}
    ></Image>
  );
};

export default Sun;
