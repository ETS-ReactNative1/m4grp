import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

const Stafafura = () => {
  return (
    <>
    <ScrollView style={styles.body}>
    <View>
    <Text style={[styles.paragraph, {marginTop: 32}]}>
        Mauris interdum ut cursus vulputate facilisi arcu curabitur nam. Viverra sapien scelerisque dictum massa enim nulla. Sit a nunc, ut massa. Vel morbi consequat, porttitor eget phasellus quam.
      </Text>
      <Text style={[styles.paragraph, {marginTop: 15}]}>
        Consequat massa, dapibus sed placerat neque blandit. Suspendisse augue blandit nisi, magna. Odio facilisis non, volutpat aliquet nibh a nisi morbi risus.      </Text>
    </View>
    <View>
    <Text style={[styles.h3, {marginTop: 60}]}>
        Skoðum barrnálarnar
      </Text>
      <Text style={[styles.paragraph, {marginTop: 2}]}>
        Rhoncus nunc elementum vivamus facilisis. Turpis consectetur lacus, a nunc tincidunt amet aliquam venenatis. Rhoncus odio sit gravida lorem sit sed enim quis ut. Sed enim egestas ut eget eu nulla donec.
      </Text>
    </View>
    <Image>

    </Image>
    <View>
    <Text style={[styles.h3, {marginTop: 226}]}>
        Skoðum könglana
      </Text>
      <Text style={[styles.paragraph, {marginTop: 8}]}>
        Sit ut bibendum lobortis ac tincidunt arcu. Volutpat ipsum urna viverra id pellentesque.
      </Text>
    </View>
    <Image>

    </Image>
    </ScrollView>
    </>
  );
};

export default Stafafura;

const styles = StyleSheet.create({
  body: {
    left: 16

  },
  h3: {
    fontFamily: "degularDisplay",
    fontSize: 32, 
  },
  paragraph: {
    width: 280,
    height: 110,
    textAlign: "left",
    color: "#30361E",
    fontFamily: "degularDisplay",
    fontSize: 16,
    lineHeight: 22.4,
  },
});
