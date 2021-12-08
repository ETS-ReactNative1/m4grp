import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

const PointsArea = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.VL} />
        <View style={styles.innerContainer}>
          <Text style={styles.decorativeH1}>{props.boxes}</Text>
          <Text style={styles.subHeading}>Box</Text>
        </View>
        <View style={styles.VL} />
        <View style={styles.innerContainer}>
          <Text style={styles.decorativeH1}>{props.points}</Text>
          <Text style={styles.subHeading}>Stig</Text>
        </View>
        <View style={styles.VL} />
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("UserList");
            }}
          >
            <Image
              source={require("../assets/users.png")}
              style={{ tintColor: "#3A5046" }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.VL} />
      </View>
    </>
  );
};

export default PointsArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  decorativeH1: {
    fontStyle: "normal",
    color: "#3A5046",
    fontSize: 36,
    lineHeight: 43,
    textAlign: "left",
  },
  subHeading: {
    fontSize: 16,
  },
  VL: {
    borderLeftWidth: 1,
    borderLeftColor: "#3A5046",
    margin: 10,
    height: 60,
  },
});
