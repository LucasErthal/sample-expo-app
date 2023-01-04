import { Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";
import type { size, variant } from "./types";

type styledButton = {
  size: size;
  variant: variant;
};
export const StyledButton = styled(TouchableOpacity)<styledButton>`
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.variant]};
  width: ${(props) => props.theme.sizes[props.size]};
  height: 40px;
`;

export const StyledTitle = styled(Text)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 32px;
  font-weight: 800;
`;

type styledText = {
  variant: variant;
};
export const StyledText = styled(Text)<styledText>`
  color: ${(props) => props.theme.colors[props.variant]};
  font-size: 16px;
`;

type styledInput = {
  size: size;
};
export const StyledInput = styled(TextInput)<styledInput>`
  padding: 0 8px;
  width: ${(props) => props.theme.sizes[props.size]};
  height: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;
