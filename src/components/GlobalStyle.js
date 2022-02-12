import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 100%;
        overflow-x: hidden;
        background: #000;
        font-family: Helvetica, sans-serif;
    }
    a {
        text-decoration: none;
        font-family: Helvetica, sans-serif;
        text-decoration: none;
    }
`
export default GlobalStyle