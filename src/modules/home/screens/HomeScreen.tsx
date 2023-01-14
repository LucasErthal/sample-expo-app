import { VStack } from "@react-native-material/core";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

function HomeScreen() {
  const [text, setText] = useState<string>("");
  const [showText, setShowText] = useState<boolean>(false);

  function handleSetText(text: string) {
    setText(text);
  }

  function handleToggleText() {
    setShowText(!showText);
  }

  return (
    <VStack fill ph={16} spacing={50} items={"center"}>
      <Text style={styles.title}>Título</Text>

      <TextInput
        style={styles.input}
        placeholder="input"
        onChangeText={handleSetText}
      />

      <TouchableOpacity style={styles.button} onPress={handleToggleText}>
        <Text style={styles.buttonText}>{showText ? "Ocultar" : "Exibir"}</Text>
      </TouchableOpacity>

      {showText && <Text style={{ marginTop: 40 }}>{text}</Text>}
    </VStack>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    borderWidth: 1,
    height: 60,
    borderRadius: 12,
    borderColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
    paddingLeft: 12,
  },
  button: {
    alignItems: "center",
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "#4D6B80",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export { HomeScreen };
