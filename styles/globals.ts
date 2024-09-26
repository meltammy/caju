import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body{
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

#root {
  margin-top: 4rem;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  font-family: "Poppins", sans-serif;
}
`;
