import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    color: #383838;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
  }
  input:focus {outline: none;} /* outline 테두리 없애기 */
`;
