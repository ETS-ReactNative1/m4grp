import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Forest = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.treeCard}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Forest", {
              title: "Stafafura",
              content:
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            });
          }}
        >
          <Text>Sjá nánar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forest;

const styles = StyleSheet.create({
  treeCard: {
    justifyContent: "center",
  },
});
