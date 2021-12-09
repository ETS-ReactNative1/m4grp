import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";

// Icons
import { Icon } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;


// this component is for both text "Til baka" button and the circle one on the map, for the circle one use prop backCircle="true"
const BackButton = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}      
      > 
    <View style={styles.backButton}>
    <Icon
      name="chevron-left"
      type="font-awesome"
      color={"#FFFDF6"}
      size={25}
    />
    <Text style={styles.backButtonText}>
      Til baka
    </Text>
    </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton:{
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFDF6",
    fontFamily: "poppinsLight",
    fontSize: 20,
    marginLeft: windowWidth / 40,
    marginTop: windowWidth / 150,

  }, 
  backText: {},
  backCircle: {},
});
