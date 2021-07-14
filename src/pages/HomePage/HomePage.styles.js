import styled from "styled-components";

export const HomePageStyle = styled.div``

export const HomePageTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 1rem;
    position: relative;
`
export const HomePageLogo = styled.img`
    height: 50px;
`

export const HomePageTitleText = styled.h1`
    font-size: 2.5rem;
    font-weight: 650;
    color: ${props => props.theme.colorPrimary};
    margin-right: 1rem;
`