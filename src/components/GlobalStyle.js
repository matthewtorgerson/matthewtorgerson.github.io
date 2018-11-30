import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background: rgb(102, 51, 153);
    background: linear-gradient(to bottom, rgb(102, 51, 153) 0%, rgb(68, 34, 102) 100%);
    color: white;
    display: grid;
    font-family: sans-serif;
    height: 100vh;
    place-items: center;
  }
`;
