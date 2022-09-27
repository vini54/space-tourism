import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
a {
  color: inherit;
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-drag: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

button {
  border: none;
  cursor: pointer;
  background: none;
  -webkit-tap-highlight-color: transparent;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
`;
