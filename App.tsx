import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { HomeView } from "./src/views/HomeView";
import { light } from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <View style={styles.container}>
        <StatusBar style="auto" />
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
