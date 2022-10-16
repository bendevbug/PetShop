import styled from 'styled-components';

export const Container = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 7.68rem;
    align-items: center;

    .header-principal {
       width: 80vw;
       margin: 0 0rem 0 22rem;
    }

    input {
        width: 40rem;
        height: 2.75rem;

        margin-left: 2rem;
        padding: 0.25rem;

        border: none;
        border: 3px solid var(--search-bar);
        border-radius: 0.50rem;
        
        text-align: left;
        font-family: 'Varela Round', sans-serif;
        font-weight: 900;
        font-size: 1rem;
    }

    input::placeholder {
        color: var(--text-header);
    }

    img[alt="logo"] {
        max-width: 15rem;
    }

    div {
        align-items: center;
        display: flex;
        gap: 0.5rem;
        margin: 0rem 10rem;

        a {
            text-decoration: none;
            color: var(--text-header);
            font-weight: bold;
            transition: all 0.2s;
        }

        a:hover {
            filter: brightness(0.7);
        }
    }

`