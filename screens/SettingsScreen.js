import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Switch,
  Modal,
  Pressable,
  TextInput,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const updateDisplayName = () => {
    auth.currentUser.updateProfile({
      displayName: displayName,
    });
    setModalVisible(!modalVisible);
  };

  const updateProfilePicture = (url) => {
    setPhotoURL(url);
    auth.currentUser.updateProfile({
      photoURL: photoURL,
    });
    setModalVisible(!modalVisible);
  };

  useEffect(() => {}, [modalVisible]);
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
        <View style={styles.userImgContainer}>
          <Image
            style={styles.userImg}
            source={{ uri: auth.currentUser.photoURL }}
          />
          <Text style={styles.photoText}>Edit Photo</Text>
        </View>
        <Text style={styles.decorativeH1}>{auth.currentUser.displayName}</Text>
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
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <ListLine name="Change Display Name" mode="arrow" />
          </Pressable>
          <ListLine name="Change Email" mode="arrow" />
          <ListLine name="Change Password" mode="arrow" />
          <ListLine name="Region" mode="arrow" />
        </View>
        <Pressable onPress={handleSignOut} style={styles.signOutBtn}>
          <Text style={styles.logOutText}>Skrá út</Text>
          <Icon name="logout" type="materialIcons" color="#fffdf7" size={20} />
        </Pressable>
        <View style={{ height: 30 }} />
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Update Display Name</Text>
            <TextInput
              placeholder="Name"
              value={displayName}
              onChangeText={(text) => setDisplayName(text)}
              style={styles.input}
            />
            <Pressable
              style={[styles.modalBtn]}
              onPress={() => {
                updateDisplayName();
              }}
            >
              <Text style={styles.textStyle}>Update Name</Text>
            </Pressable>
            <Pressable
              style={[styles.modalBtn]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  // USER INFO AREA
  userCont: {
    alignItems: "center",
    marginTop: 10,
  },
  userImg: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: {
    fontSize: windowWidth / 40,
    fontFamily: "poppinsLight",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    position: "absolute",
    height: windowWidth / 10,
    width: windowWidth / 4,
    bottom: -5,
    paddingTop: windowHeight / 80,
    textAlign: "center",
    color: "#464646",
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
  // LIST AREA
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
  // Sign Out Button
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

  // Modal style
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    backgroundColor: "#FFFDF6",
    color: "#30361E",
    fontFamily: "degularDisplay",
    fontSize: 18,
    borderWidth: 2,
    marginBottom: 15,
    height: 60,
    width: windowWidth / 1.5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
  },
  modalBtn: {
    width: 148,
    borderRadius: 99,
    padding: 10,
    elevation: 2,
    backgroundColor: "#434B2A",
    marginVertical: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
