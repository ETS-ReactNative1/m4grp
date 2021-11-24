import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default WebViewhtml = () => {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        uri: "https://api.thorbergur.me/",
      }}
    />
  );
};
