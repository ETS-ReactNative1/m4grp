import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";

import Stafafura from "./treeInfo/coniferTrees/Stafafura";

const ConiferTrees = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Greni þurfa ekki eins mikið vatn og lauftré og geta því vaxið þar sem lauftré þrífast ekki. Sumt barr hefur vaxkennda húð á yfirborðinu sem verndar það. Barr inniheldur líka ýmis efni sem virka eins og frostlögur. Það þolir því vel kulda og flest barrtré halda því barrinu á veturna. Trén eru þess vegna græn á litinn allan ársins hring. Margar mismunandi gerðir eru til af barrtrjám. </Text>
        <Text style={styles.title}>Lerki</Text>
        <Text style={styles.paragraph}>Barrtré hafa löng og mjó, nálarlaga eða hreisturlaga laufblöð sem eru kölluð barr. Barrið er í raun upprúlluð laufblöð. Flest barrtré vaxa meira á hæðina en breiddina og eru því gjarnan keilulaga. 
Barrtré þurfa ekki eins mikið vatn og lauftré og geta því vaxið þar sem lauftré þrífast ekki. Sumt barr hefur vaxkennda húð á yfirborðinu sem verndar það. Barr inniheldur líka ýmis efni sem virka eins og frostlögur. Það þolir því vel kulda og flest barrtré halda því barrinu á veturna. Trén eru þess vegna græn á litinn allan ársins hring. Margar mismunandi gerðir eru til af barrtrjám. Á Íslandi eru fura, greni og lerki algengust barrtrjáa. Lerki er sérstakt af því að það fellir barrið á haustin.</Text>
      </View>
      <View style={styles.treeCard}>
        <TouchableOpacity style={styles.treeNav}
          onPress={() => {
            navigation.navigate("TreeInfo", {
              title: "Stafafura",
              pickingStatus: "Söfnun í gangi",
              pickingTime: "mai-sept",
              Content: <Stafafura />,
            });
          }}
        >
          <Text style={styles.menuText}>Stafafura</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default ConiferTrees;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFDF7',
  },
  treeCard: {
    justifyContent: "center",
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 40,
    backgroundColor: '#FFFDF7',
  },

  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 40,
  },

  treeNav: {
    marginTop: 20,
    marginLeft: 15,
    height: 110, 
    width: 85,
    borderRadius: 20,
    backgroundColor: '#30361E',
  },

  menuText: {
    marginTop: 75,
    marginLeft: 13,
    color: '#FFFDF7',
  },
});
