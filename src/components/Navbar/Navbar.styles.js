import styled from "styled-components";
import {Link} from "react-router-dom"
import { Container } from "../../App.styles";


export const NavContainer = styled.div`
    
    font-size: 1.8rem;
    font-weight: 600;
    background-color: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.colorWhite};
    padding: 1rem 0;

    & ${Container}{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const NavLogo = styled.img`
    height: 50px;
`

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NavLink = styled(Link)`
    color: ${props => props.theme.colorWhite};
    margin-left: ${props => props.theme.marginMedium};
`
export const SearchContainer = styled.div`
    background-color: ${props => props.theme.colorWhite};
    width: 600px;
    min-width: 300px;
    padding-left: 1rem;
    height: 30px;
    border-radius: 100px;
    display: flex;
    align-items: center;
`

export const Input = styled.input.attrs(props => ({
    type: "text",
}))`
    width: 90%;
    height: 100%;
    border: none;
    margin-left: 1rem;
    font-size: 1.7rem;
`

