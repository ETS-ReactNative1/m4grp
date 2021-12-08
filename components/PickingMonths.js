import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Icons
import { Icon } from "react-native-elements";

const PickingMonths = (props) => {
  const { treeName, pickingProgress, pickingProgressStatus, months } = props;

  return (
    <View style={{ backgroundColor: "#30361E" }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.pickingInfoCard}>
          <Text style={styles.pickingProgressText}>
            {pickingProgress} {pickingProgressStatus}
          </Text>
        </View>
        <View style={styles.pickingInfoCard}>
          <Icon
            name="alarm"
            type="MaterialIcons"
            style={styles.clock}
            size={35}
          />
          <Text style={styles.pickingInfoText}>{months}</Text>
        </View>
      </View>
    </View>
  );
};

export default PickingMonths;

const styles = StyleSheet.create({
  treeName: {
    color: "#FFFDF6",
    fontSize: 36,
    left: 25,
    // marginTop: -430,
    backgroundColor: "#30361E",
  },

  pickingInfoCard: {
    alignItems: "center",
    backgroundColor: "#434B2A",
    width: 72,
    height: 89,
    borderRadius: 16,
    flexWrap: "wrap",
    margin: 16,
  },

  pickingInfoText: {
    color: "#FFFDF6",
    fontSize: 16,
    marginTop: 6,
  },

  pickingProgressText: {
    color: "#FFFDF6",
    fontSize: 16,
    marginTop: 16,
  },

  pickingProgressTextSecondLine: {
    color: "#FFFDF6",
    fontSize: 16,
    marginTop: 5,
  },

  clock: {
    marginTop: 15,
  },
});
