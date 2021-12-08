import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import BackButton from "../components/BackButton";
import PickingCards from "../components/PickingCards";

const windowWidth = Dimensions.get("window").width;

const TreeInfoScreen = (route) => {
  const { title, Content, pickingStatus, pickingTime } = route.route.params;
  console.log(route.route);

  console.log("This is content: " + Content);

  return (
    <>
      <View style={styles.topArea}>
        <BackButton />
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
    </>
  );
};

export default TreeInfoScreen;

const styles = StyleSheet.create({
  cards: {
    position: "absolute",
    left: 16,
    bottom: 40,
  },
  topArea: {
    backgroundColor: "#30361E",
    height: 417 ,
  },
  contentArea: { 
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FFFDF6",
    flex: 1,
    zIndex: -1,
  },
  tree: {
    position: "absolute",
    left: windowWidth - 173,
  },
});
