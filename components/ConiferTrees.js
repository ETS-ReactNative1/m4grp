import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Stafafura from "./treeInfo/coniferTrees/Stafafura";

const ConiferTrees = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.treeCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TreeInfo", {
              title: "Stafafura",
              pickingStatus: "Söfnun í gangi",
              pickingTime: "mai-sept",
              Content: <Stafafura />,
            });
          }}
        >
          <Text>Stafafura</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConiferTrees;

const styles = StyleSheet.create({
  treeCard: {
    justifyContent: "center",
  },
});
