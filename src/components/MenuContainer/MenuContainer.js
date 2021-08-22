import React from 'react'
import {MenuTop, MenuTextContainer, MenuText, StyledMenuContainer} from "./MenuContainer.styles"
import { NavLogo } from "../Navbar/Navbar.styles";
import CloseIcon from '@material-ui/icons/Close';


function MenuContainer({toggleMenu, setToggleMenu}) {
    
    return (
            <StyledMenuContainer toggleMenu={toggleMenu}>
                <MenuTop>
                    <NavLogo src="./images/myNews.svg" />
                    <CloseIcon style={{ 
                                    fontSize: 33,
                                    cursor: "pointer"
                                }} onClick={() => setToggleMenu(!toggleMenu)} />
                </MenuTop>
                <MenuTextContainer>
                    <MenuText>About Us</MenuText>
                </MenuTextContainer>
                <MenuTextContainer>
                    <MenuText>Contact</MenuText>
                </MenuTextContainer>
                <MenuTextContainer>
                    <MenuText>Privacy policy</MenuText>
                </MenuTextContainer>
                <MenuTextContainer>
                    <MenuText>Terms {"&"} Condition</MenuText>
                </MenuTextContainer>
            </StyledMenuContainer>
            
    )
}

export default MenuContainer
