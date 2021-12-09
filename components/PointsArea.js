import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

// Icons
import { Icon } from "react-native-elements";

const windowHeight = Dimensions.get("window").height;

const PointsArea = (props) => {
  const navigation = useNavigation();
  console.log(windowHeight);

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
            <Icon
              name="people-alt"
              type="materialicons"
              color="#464646"
              size={55}
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
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  decorativeH1: {
    fontStyle: "normal",
    color: "#464646",
    fontSize: windowHeight / 27,
    fontFamily: "poppinsSemiBold",
    lineHeight: 45,
    textAlign: "left",
    zIndex: 1,
  },
  subHeading: {
    color: "#464646",
    fontSize: 20,
    fontFamily: "poppinsLight",
    zIndex: 1,
  },
  VL: {
    borderLeftWidth: 1,
    borderLeftColor: "#c4c4c4",
    margin: 10,
    height: windowHeight / 15,
  },
});
