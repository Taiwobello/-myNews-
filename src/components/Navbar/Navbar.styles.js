import styled from "styled-components";
import { NavLink} from "react-router-dom";
import { Container } from "../../App.styles";
import { device } from "../../screenSize";


export const NavContainer = styled.div`
    
    font-size: 1.8rem;
    font-weight: 600;
    background-color: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.colorWhite};
    padding: 1rem 0;
    position: relative;
    z-index: 100;
    min-height: 5rem;

    @media ${device.tabletL}{
        font-size: 1.4rem;
    }
    & .nav-container{
        position: fixed;
        /* height: 10vh; */
        top: 0;
        left: 0;
        background: red;
        width: 100%;
        background: ${props => props.theme.colorPrimary};
        padding: 0.5rem 0;
        min-height: 5rem;
    }

    & .menu{
        /* fontSize: 33; */
        cursor: "pointer";
        /* visibility: toggleMenu ? "hidden" : "visible"; */
        @media ${device.mobileL}{
        display: none;
    }
    }
    

    & ${Container}{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;

        @media ${device.mobileL}{
        display: block;
        text-align: center;
    }
        /* position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        background: ${props => props.theme.colorPrimary}; */
        /* padding-left: 20rem; */
    }
`
export const NavLogo = styled.img`
    height: 35px;

    @media ${device.mobile}{
        height: 30px;
        margin: 0.7rem 0;
    }
`

export const NavLinks = styled.div`
    display: flex;
    padding: 0 1rem;
    &:first-child {
        color: red;
    }
    

    @media ${device.mobileL}{
        justify-content: center;
        
    }
    
`

export const NavLinkStyle = styled(NavLink)`
    color: ${props => props.theme.colorWhite};
    margin-left: ${props => props.theme.marginMedium};
    
    &.active{
        border-bottom: 1.8px solid white;
    }
    
    @media ${device.mobile}{
        margin-left: 2rem;
        font-size: 1.3rem;
    }
    @media ${device.mobileL}{
        margin-left: 1.5rem;
        font-size: 1.2rem;
        /* margin-left: 2rem; */
        font-size: 1.3rem;
    }
    @media ${device.mobileSS}{
        margin-left: 1rem;
        font-size: 1.1rem;
    }
    &.home{
        margin-left: 0;
    }
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

    &:focus{
        outline: none;
    }
`

