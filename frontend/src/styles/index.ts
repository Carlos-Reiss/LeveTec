import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html, body{
    #root{
      height: 100%;
    }
  }
  body{
    background: #f9f9f9;
    -webkit-font-smoothing: antialiased !important;
    font-size: 16px;
    color: #444;
    font-family: 'Roboto', sans-serif;
  }
  input, button{
    cursor: pointer;
  }
`;
