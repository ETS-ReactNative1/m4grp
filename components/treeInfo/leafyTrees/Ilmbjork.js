import React from "react";
import { View, Text, Image, StyleSheet, Dimensions,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

const Ilmbjork = () => {
  return (
    <ScrollView style={styles.body}>
      <View>
        <Text style={[styles.paragraph, {marginTop: windowWidth / 6}]}>
        A birch has smooth, resinous, varicoloured or white bark, marked by horizontal pores, which usually peels horizontally in thin sheets, especially on young trees
        </Text>
        <Text style={[styles.paragraph, {}]}>
        It will be much better if you go out to pick seeds when it is dry. 
        Make sure to put your seed straight into the box when you get it. 
        </Text>
      </View>
      <View>
        <Text style={[styles.h3, {}]}>Skoðum Laufin</Text>
        <Text style={[styles.paragraph, {}]}>
        Leaves are have narrow 
        tips and are light green underneath.
        </Text>
        <Image 
          style={styles.betulaleaf1} 
          source={require("../../../assets/betulaleaf.png")} />
      </View>
      <View 
        style={{bottom: windowWidth / 5}}>
        <Text style={[styles.h3, {marginTop: windowWidth / 50}]}>Skoðum fræin</Text>
        <Text style={[styles.paragraph, {marginBottom: windowWidth / 100}]}>
        The seeds are ready to be 
        picked when they are bright green and hard to the touch.
        </Text>
        <Image 
          style={styles.betulaleaf2} 
          source={require("../../../assets/betulaleaf-2.png")} />
      </View>
      <View 
        style={{bottom: windowWidth / 4}}>
        <Text style={[styles.h3, {}]}>Skoðum börkinn</Text>
        <Text style={[styles.paragraph, {marginBottom: windowWidth / 10}]}>
        Birch tree bark is usually whitish-gray, silver, or sometimes red. The bark on most birch trees has horizontal dark streaks that look like scoring. Birch tree bark is also well-known for its paper-like texture and peeling nature.
        </Text>
      </View>
      <Image 
          style={styles.birchBark} 
          source={require("../../../assets/birchBark.png")} />
    </ScrollView>
  );
};

export default Ilmbjork;

const styles = StyleSheet.create({
  body: {
  },
  h3: {
    fontFamily: "degularDisplay",
    fontSize: 32,
    paddingLeft: windowWidth / 20,
    paddingTop: windowWidth / 20,
    color: "#30361E",
  },
  paragraph: {
    width: windowWidth / 1.25,
    paddingLeft: windowWidth / 20,
    paddingTop: windowWidth / 20,
    color: "#30361E",
    fontFamily: "degularDisplay",
    fontSize: 18,
    lineHeight: 22.4,
  },
  betulaleaf1: {
    position: "relative",
    left: windowWidth - 200,
    bottom: windowWidth / 10,
  },
  birchBark: {
    marginBottom: windowWidth - 500,
    left: windowWidth - 300,
    top: windowWidth - 550,
    flexDirection: "row",
  }
});
