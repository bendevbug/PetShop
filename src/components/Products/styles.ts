import styled from 'styled-components'

export const Container = styled.section`
   justify-content: center;
   align-items: center;
   display: flex;
`

export const Content = styled.section`
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3rem 1rem 2rem 2rem;
    width: 80rem;

    

    div {
        width: 20.5rem;
        display: grid;
        justify-content: center;
        align-items: center;
        background: #F3F3F3;
        border-radius: 0.50rem;
        padding: 1.5rem;
        margin-top: 2rem;

        img {
           margin: 0 auto;
        }

        h3 {
           text-align: center;
           font-size: 1rem;
           color: var(--price-text);

           strong {
              font-size: 1.5rem;
              color: #FF2D00;
           }
        }
    }

    div:hover {
      cursor: pointer;
    }
`

