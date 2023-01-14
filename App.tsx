import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components";
import Login from "./src/modules/Login/screens/Login";
import { HomeView } from "./src/modules/Home/screens/HomeView";
import { light } from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Login /> */}
        <HomeView />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
});
