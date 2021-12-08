import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Forest from "./Forest";



const UserListItem = (props) => {
  const { userName, points } = props;
  console.log(props);

  return (
    <View style={styles.userContainer}>
      <View style={styles.avatarName}>
      <Image
        style={styles.userImage}
        source={require("../assets/placeholder.png")}
        >
        </Image>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View style={styles.pointsForest}>
      <View style={styles.pointsWord}>
      <Text style={styles.points}>{points}</Text>
      <Text> stig</Text>
      </View>
      <Forest />
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#FFFDF6',
  },

  userImage: {
    width: 50,
    height: 50 ,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  userName: {
    color: '#30361E',
    fontSize: 20,
    marginTop: 31,
    marginLeft: 10,
  },
  
  avatarName: {
    color: '#30361E',
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  pointsForest: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  pointsWord: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  points: {
    fontWeight: 'bold',
  },

  line: {
    height: 1,
    opacity: 0.5,
    backgroundColor: '#58643A',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
})