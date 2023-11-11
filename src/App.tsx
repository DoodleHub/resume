import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    ul {
      list-style-type: none;
    }

    a {
      text-decoration: none;
    }
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
    </>
  );
};
