import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }

    html {
        text-rendering: geometricPrecision;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        padding: 0;
        margin: 0;
        font-family: "Roboto","Arial",sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow-y: scroll;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1, h2, p {
        margin: 0;
    }

    iframe {
        border: none;
    }

    img {
        object-fit: cover;
    }

    #root {
        height: 100%;
        width: 100%;
    }

    @media only screen and (max-width: 640px) {
        .mobile-scroll-lock {
            overflow: hidden;
        }
    }
`;
