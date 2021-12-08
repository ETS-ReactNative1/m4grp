import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const ConiferTrees = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.treeCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TreeInfo", {
              title: "Stafafura",
              content:
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
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
