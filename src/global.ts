import {createGlobalStyle} from 'styled-components';

export const Container = createGlobalStyle`
    :root {
        /* --background: #E2D3D3; */
        --background: #fff;
        --bg-header: #fff;
        --price-text: #E04E2F;
        --text-header: #EE7156;
        --search-bar: #E04E2F;
        --bg-menu-bar: #6C0DB7;
        --bg-banner: #C29EDF;
        --modals: #F3F3F3;
    }

    body {
        background: var(--background);
        margin: 0;
        padding: 0;
        font-family: 'Varela Round', sans-serif;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%; 
        }

        @media(max-width: 720px) {
            font-size: 87.5%; 
        }

    }
`