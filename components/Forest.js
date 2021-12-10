import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import BackButton from "./BackButton";

const Forest = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Forest", {
              title: "Stafafura",
              content:
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            });
          }}
        >
          <Text style={styles.text}>Sjá nánar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forest;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    backgroundColor: "#434B2A",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: -8,
  },

  text: {
    color: "#FFFDF6",
  },
});
