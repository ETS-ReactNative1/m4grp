import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Switch,
} from "react-native";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/core";

// Icons
import { Icon } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ListLine = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.listLine}>
      <Text style={styles.listItem}>{props.name}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        // style={{ width: 40, height: 24 }}
        style={{ marginBottom: 5, marginTop: 5 }}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.body}>
      <View style={styles.userCont}>
        <Image
          style={styles.userImg}
          source={require("../assets/placeholder.png")}
        />
        <Text style={styles.decorativeH1}>{auth.currentUser?.email}!</Text>
      </View>
      <Text style={styles.listTitle}>ALLOW APP TO ACCESS</Text>
      <View style={styles.list}>
        <ListLine name="Camera" />
        <ListLine name="Location" />
        <ListLine name="Notifications" />
        <ListLine name="Mobile Data" />
      </View>
      <Text style={styles.listTitle}>PROFILE INFORMATION</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>Change Email</Text>
      </View>
      <TouchableOpacity onPress={handleSignOut} style={styles.signOutBtn}>
        <Text style={styles.logOutText}>Skra Ut</Text>
        <Icon name="logout" type="materialIcons" color="#fffdf7" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

// Stylesheet
const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDF6",
    marginTop: 0,
    zIndex: 1,
    flex: 1,
  },
  userCont: {
    alignItems: "center",
    marginTop: 30,
    zIndex: 1,
  },
  userImg: {
    width: 150,
    height: 150,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  decorativeH1: {
    fontFamily: "degularDisplay",
    letterSpacing: 2,
    marginTop: 20,
    color: "#3A5046",
    fontSize: 32,
    lineHeight: 43,
    textAlign: "left",
    zIndex: 1,
  },
  list: {
    width: windowWidth - 74,
  },
  listTitle: {
    fontFamily: "poppinsLight",
    fontSize: 16,
    color: "#939393",
  },
  listLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    fontFamily: "poppinsLight",
    fontSize: 16,
    color: "#464646",
  },
  signOutBtn: {
    position: "absolute",
    bottom: 40,
    left: windowWidth - 185,
    width: 148,
    height: 48,
    backgroundColor: "#434B2A",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logOutText: {
    color: "#fffdf7",
    right: 10,
    fontFamily: "degularDisplay",
    fontSize: 24,
  },
});
