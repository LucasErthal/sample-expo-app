import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeView } from "./src/modules/Home/screens/HomeView";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
});
