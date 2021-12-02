import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// this component is for both text "Til baka" button and the circle one on the map, for the circle one use prop backCircle="true"
const BackButton = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={props.backCircle ? styles.backCircle : styles.backText}
      >
        <Image
          source={
            props.backCircle
              ? require("../assets/backCircle.png")
              : require("../assets/backArrow.png")
          }
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backText: {},
  backCircle: {},
});
