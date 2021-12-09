import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import PickingCards from "../components/PickingCards";

const windowWidth = Dimensions.get("window").width;

const TreeInfoScreen = (route) => {
  const { title, Content, pickingStatus, pickingTime } = route.route.params;
  console.log(route.route);

  console.log("This is content: " + Content);

  return (
    <>
    <ScrollView>
      <View style={styles.body}>
      <View
        style={{
          position: "absolute",
          marginTop: windowWidth / 5,
          marginLeft: windowWidth / 20,
        }} 
        >
        <BackButton/>
      </View> 

      <View style={styles.topArea}>
        <View style={styles.cards}>
          <Text
            style={{
              fontSize: 48,
              fontFamily: "degularDisplay",
              letterSpacing: 2,
              color: "#FFFDF6",
            }}
          >
            {title}
          </Text>
          <View style={{ left: -16 }}>
            <PickingCards
              pickingStatus={pickingStatus}
              pickingTime={pickingTime}
            />
          </View>
        </View>
      </View>
      <Image style={styles.tree} source={require("../assets/stafafura.png")} />
      <View style={styles.contentArea}>
        <View>{Content}</View>
      </View>
      </View>
  </ScrollView>
    </>
  );
};

export default TreeInfoScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#30361E",
    justifyContent: "flex-start",
  },
  topArea: {
    position: "absolute",
    marginTop: windowWidth / 3,
    paddingLeft: windowWidth / 20,
    paddingTop: windowWidth / 5,

  },
  contentArea: { 
    marginTop: windowWidth / 1 ,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FFFDF7",
    zIndex: -1,
  },
  tree: {
    position: "absolute",
    left: windowWidth - 173,
    top: windowWidth / 4,
  },
});
