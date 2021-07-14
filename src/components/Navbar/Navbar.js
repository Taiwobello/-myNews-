import React from 'react'
import { Input, NavContainer, NavLink, NavLinks, NavLogo, SearchContainer } from './Navbar.styles'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '../../App.styles';

function Navbar() {
    return (
        <NavContainer>
            <Container>
                <NavLogo src="./images/myNews.svg" />
                <NavLinks>
                    <NavLink to="/">GENERAL</NavLink>
                    <NavLink to="/business">BUSINESS</NavLink>
                    <NavLink to="/entertainment">ENTERTAINMENT</NavLink>
                    <NavLink to="/sports">SPORT</NavLink>
                    <NavLink to="/health">HEALTH</NavLink>
                </NavLinks>
                <SearchContainer>
                    <SearchIcon style={{ 
                        color: "#000000",
                        fontSize: 25 
                        }} fontSize="large" />
                    <Input placeholder="search" />
                </SearchContainer>
                <MenuIcon style={{ 
                        fontSize: 33,
                        cursor: "pointer"
                    }} />
            </Container>
        </NavContainer>
    )
}

export default Navbar
