import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    sizes: {
      sm: string;
      md: string;
      lg: string;
    };

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      dark: string;
      light: string;
      black: string;
      white: string;
    };
  }
}
