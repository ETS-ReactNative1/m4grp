import React from "react";
import { View, Text, Image, StyleSheet, Dimensions,} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

const Ilmbjork = () => {
  return (
    <ScrollView style={styles.body}>
      <View>
        <Text style={[styles.paragraph, {marginTop: windowWidth / 6}]}>
          Mauris interdum ut cursus vulputate facilisi arcu curabitur nam.
          Viverra sapien scelerisque dictum massa enim nulla. Sit a nunc, ut
          massa. Vel morbi consequat, porttitor eget phasellus quam.
        </Text>
        <Text style={[styles.paragraph, {}]}>
          Consequat massa, dapibus sed placerat neque blandit. Suspendisse augue
          blandit nisi, magna. Odio facilisis non, volutpat aliquet nibh a nisi
          morbi risus.
        </Text>
      </View>
      <View>
        <Text style={[styles.h3, {}]}>Skoðum barrnálarnar</Text>
        <Text style={[styles.paragraph, {}]}>
          Rhoncus nunc elementum vivamus facilisis. Turpis consectetur lacus, a
          nunc tincidunt amet aliquam venenatis. Rhoncus odio sit gravida lorem
          sit sed enim quis ut. Sed enim egestas ut eget eu nulla donec.
        </Text>
        <Image 
          style={styles.pineSapling} 
          source={require("../../../assets/stafafura-2.png")} />
      </View>
      <View>
        <Text style={[styles.h3, {}]}>Skoðum könglana</Text>
        <Text style={[styles.paragraph, {marginBottom: windowWidth / 10}]}>
          Sit ut bibendum lobortis ac tincidunt arcu. Volutpat ipsum urna
          viverra id pellentesque.
        </Text>
      </View>
      <View style={styles.coneCont}>
        <Image
         source={require("../../../assets/cone.png")} />
        <Image
         style={{
          marginLeft: windowWidth - 550,
          marginTop: windowWidth - 530,
          height: 200,
          width: 200,
          transform: [
            { rotateZ: "-33deg" }
          ]
        }}
         source={require("../../../assets/cone.png")} />
      </View>
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
  pineSapling: {
    position: "relative",
    left: windowWidth - 200,
    bottom: windowWidth / 10,
  },
  coneCont: {
    marginBottom: windowWidth / 10,
    left: windowWidth - 350,
    top: windowWidth - 350,
    flexDirection: "row",
    transform: [
      { rotateY: "33deg" },
      { rotateZ: "33deg" }
    ]
  }
});
