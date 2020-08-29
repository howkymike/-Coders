import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        font-size: calc(9px + 6 * ((100vw - 320px) / 1600));
    }

    body {
        font-family: 'Press Start 2P', cursive;
    }
`;
