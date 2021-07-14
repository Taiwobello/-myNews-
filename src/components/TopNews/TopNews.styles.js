import styled from "styled-components";
import { Container } from '../../App.styles'

export const StyledTopNews = styled.div`
    margin-top: 4rem;

    & ${Container}{
        display: grid;
        grid-template-columns: repeat(2, minmax(400px, 500px)) 300px;
        grid-template-rows: repeat(2,180px);
        justify-content: center;
        gap: 2rem;
    }
`
