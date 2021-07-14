import styled from "styled-components";
import { Container } from "../../App.styles";

export const StyledNews = styled.div`
    border: 1px solid black;
    display: flex;
    width: 70%;
    margin-bottom: 3rem;
    border-radius: 30px;
    padding: 1rem;
    color: ${props => props.theme.colorPrimary};
    & ${Container}{
        
    }
`

export const StyledNewsDescription = styled.div`

`

export const NewsImage = styled.img`
    height: 200px;
    border-radius: 30px;
    margin-right: 3rem;
`

export const NewsText = styled.p`
    font-size: 2rem;
`

export const NewsTitle = styled.h1`
    font-size: 2.2rem;
    line-height: 2.5rem;
    margin-bottom: 2rem;
`