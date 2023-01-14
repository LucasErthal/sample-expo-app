import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "./src/modules/home/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
