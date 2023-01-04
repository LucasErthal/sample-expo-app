import { useState } from "react";
import {
  StyledButton,
  StyledText,
  StyledTitle,
  StyledInput,
} from "../../sharedStyles";
import "./styles";
import { HomeContainer } from "./styles";

function HomeView() {
  const [text, setText] = useState<string>("");
  const [showText, setShowText] = useState<boolean>(false);

  function handleSetText(text: string) {
    setText(text);
  }

  function handleToggleText() {
    setShowText(!showText);
  }

  return (
    <HomeContainer>
      <StyledTitle>Título</StyledTitle>

      <StyledInput
        size="lg"
        style={{ marginTop: 40 }}
        placeholder="input"
        onChangeText={handleSetText}
      />

      <StyledButton
        variant="primary"
        onPress={handleToggleText}
        size="lg"
        style={{ marginTop: 40 }}
      >
        <StyledText variant="white">
          {showText ? "Ocultar" : "Exibir"}
        </StyledText>
      </StyledButton>

      {showText && (
        <StyledText variant="dark" style={{ marginTop: 40 }}>
          {text}
        </StyledText>
      )}
    </HomeContainer>
  );
}

export { HomeView };
