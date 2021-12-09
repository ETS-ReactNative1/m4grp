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
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { Icon } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ListLine = (props) => {
  const { name, mode, arrowText } = props;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  if (mode === "switch") {
    return (
      <View style={styles.listLine}>
        <Text style={styles.listItem}>{name}</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          // style={{ width: 40, height: 24 }}
          style={{ marginBottom: 5, marginTop: 5 }}
        />
      </View>
    );
  } else if (mode === "arrow") {
    return (
      <View style={styles.listLine}>
        <Text style={styles.listItem}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.arrowText}>{arrowText}</Text>
          <Icon name="chevron-right" type="Entypo" color="#464646" size={32} />
        </View>
      </View>
    );
  }
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
      <ScrollView style={{ paddingBottom: 20 }}>
        <Text style={styles.listTitle}>ALLOW APP TO ACCESS</Text>
        <View style={styles.list}>
          <ListLine name="Camera" mode="switch" />
          <ListLine name="Location" mode="arrow" arrowText="While using" />
          <ListLine name="Notifications" mode="switch" />
          <ListLine name="Mobile Data" mode="switch" />
        </View>
        <Text style={styles.listTitle}>PROFILE INFORMATION</Text>
        <View style={styles.list}>
          <ListLine name="Camera" mode="arrow" />
          <ListLine name="Location" mode="arrow" />
          <ListLine name="Notifications" mode="arrow" />
          <ListLine name="Mobile Data" mode="arrow" />
        </View>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOutBtn}>
          <Text style={styles.logOutText}>Skrá út</Text>
          <Icon name="logout" type="materialIcons" color="#fffdf7" size={20} />
        </TouchableOpacity>
        <View style={{ height: 30 }} />
      </ScrollView>
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
    flex: 1,
  },
  userCont: {
    alignItems: "center",
    marginTop: 10,
  },
  userImg: {
    width: windowWidth / 2.7,
    height: windowWidth / 2.7,
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
  },
  list: {
    width: windowWidth - 74,
    paddingLeft: 20,
  },
  listTitle: {
    fontFamily: "poppinsLight",
    fontSize: 20,
    color: "#939393",
    marginVertical: 16,
  },
  listLine: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    fontFamily: "poppinsLight",
    fontSize: 16,
    color: "#464646",
  },
  arrowText: {
    top: 7,
    color: "#939393",
    fontSize: 12,
    fontFamily: "poppinsLight",
  },
  signOutBtn: {
    width: 148,
    height: 48,
    top: 16,
    right: 16,
    backgroundColor: "#434B2A",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  logOutText: {
    color: "#fffdf7",
    right: 10,
    fontFamily: "degularDisplay",
    fontSize: 24,
  },
});
