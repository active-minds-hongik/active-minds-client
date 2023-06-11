import { createGlobalStyle } from 'styled-components';
import WelcomeFont from '../fonts/welcomefontregular.ttf';
import GmarketSansTTFMedium from '../fonts/GmarketSansTTFMedium.ttf';


export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: GmarketSansTTFMediumFont;
  }

  @font-face {
        font-family: 'WelcomeFont';
        font-style: normal;
        src: url(${WelcomeFont}) format('truetype');
  }
  @font-face {
        font-family: 'GmarketSansTTFMediumFont';
        font-style: normal;
        src: url(${GmarketSansTTFMedium}) format('truetype');
  }

  body {
    line-height: 1.5;
    color: #383838;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: beige;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: #66c84e;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-weight: 500;
    &:hover {
    background-color: #0287d3;
    transform: scale(1.1);
    transition: 0.3s;
  }
  }


  input:focus {outline: none;} /* outline 테두리 없애기 */
`;
