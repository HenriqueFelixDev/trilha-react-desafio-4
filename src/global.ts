import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background-color: #81259D;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`