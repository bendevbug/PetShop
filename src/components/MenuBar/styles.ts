import styled from 'styled-components';



export const Container = styled.nav`
    
    div {
        background: var(--bg-banner);
        display: flex;
        justify-content: center;

        img {
            max-width: 2080px;
        }
    }

    ul {
        background-color: var(--bg-menu-bar);
        margin: 0;
        border: none;
        display: flex;
        justify-content: space-between;
        padding: 1rem;

        li {
            list-style: none;

            a {
                color: var(--text-header);
                text-decoration: none;
                font-weight: 900;
                transition: all 0.5s;
            }

            a:hover {
                filter: brightness(1.5);
            }
        }

        li:nth-child(4) {
            margin: 0 8rem 0 0;
        } 

        li:nth-child(1) {
            margin: 0 0 0 8rem;
        } 
    }
`