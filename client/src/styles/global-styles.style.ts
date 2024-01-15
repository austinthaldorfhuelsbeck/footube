import { createGlobalStyle } from "styled-components";
import "./theme.css";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
    }

    html {
        text-rendering: geometricPrecision;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        padding: 0;
        margin: 0;
        font-family: var(--font-primary);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow-y: scroll;
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
