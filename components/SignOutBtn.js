import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/core";

const SignOutBtn = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  // TODO
  return (
    <View>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignOutBtn;
