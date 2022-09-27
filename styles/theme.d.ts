import "styled-components";
import MainTheme from "./Theme";

declare module "styled-components" {
  type ThemeType = typeof MainTheme;

  export interface DefaultTheme extends ThemeType {}
}
