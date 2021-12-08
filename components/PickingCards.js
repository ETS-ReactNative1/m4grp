import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Icons
import { Icon } from "react-native-elements";

const PickingCards = (props) => {
  const { pickingStatus, pickingTime } = props;
  console.log(props);

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.pickingInfoCard}>
        <Text style={styles.cardText}>{pickingStatus}</Text>
      </View>
      <View style={styles.pickingInfoCard}>
        <Icon name="alarm" type="MaterialIcons" size={40} color="#FFFDF6" />
        <Text style={[styles.cardText, { fontSize: 14 }]}>{pickingTime}</Text>
      </View>
    </View>
  );
};

export default PickingCards;

const styles = StyleSheet.create({
  pickingInfoCard: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#434B2A",
    width: 72,
    height: 89,
    borderRadius: 16,
    margin: 16,
  },
  cardText: {
    color: "#FFFDF6",
    fontSize: 16,
    textAlign: "center",
  },
});
