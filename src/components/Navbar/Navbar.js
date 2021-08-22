import React from "react";
import {NavContainer, NavLinkStyle, NavLinks, NavLogo } from './Navbar.styles'
// import SearchIcon from '@material-ui/icons/Search';
// import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '../../App.styles';
import MenuContainer from "../MenuContainer/MenuContainer";
import { useState } from "react";
// import { useDispatch } from 'react-redux'
// import { fetchGeneralFailure, fetchGeneralNewsSuccess, fetchNewsGeneral } from "../../redux/generalNews/generalNewsAction";
// import Search from "../Search/Search";
// import fetchNews from "../../redux/fetchNews";

function Navbar() {
    // const dispatch = useDispatch()
    const [toggleMenu, setToggleMenu] = useState(false)
    // const [ setActiveTag] = useState("all")
    // const generalNewsCategory = {
    //     fetchNewsSuccess: fetchGeneralNewsSuccess,
    //     fetchNews: fetchNewsGeneral,
    //     fetchNewsFaliure: fetchGeneralFailure
    // }

    return (
        <NavContainer>
            <div className="nav-container">
                <Container>
                    <NavLogo src="./images/myNews.svg" />
                    <NavLinks>
                        <NavLinkStyle className="home" exact to="/" activeClassName="active">GENERAL</NavLinkStyle>
                        <NavLinkStyle  to="/business" activeClassName="active" >BUSINESS</NavLinkStyle>
                        <NavLinkStyle to="/entertainment" activeClassName="active">ENTERTAINMENT</NavLinkStyle>
                        <NavLinkStyle to="/sports" activeClassName="active">SPORT</NavLinkStyle>
                        <NavLinkStyle to="/health" activeClassName="active">HEALTH</NavLinkStyle>
                    </NavLinks>
                    {/* <SearchContainer>
                        <SearchIcon style={{ 
                            color: "#000000",
                            fontSize: 25 
                            }} fontSize="large" />
                        <Input placeholder="search" />
                    </SearchContainer> */}
                    {/* <MenuIcon className="menu" style={{ 
                            
                        }} onClick={() => setToggleMenu(!toggleMenu)} /> */}

                    {/* <Search /> */}
                </Container>
            </div>
            <MenuContainer toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </NavContainer>
    )
}

export default Navbar
