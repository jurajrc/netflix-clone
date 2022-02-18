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
        overflow-x: hidden;
    }
    a {
        text-decoration: none;
        font-family: Helvetica, sans-serif;
        text-decoration: none;
    }
    .header-logged {
        height: 80px;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,0) 2%, rgba(0,0,0,0.8) 100%);
    }
`
export default GlobalStyle