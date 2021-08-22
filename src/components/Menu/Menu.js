import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import CloseIcon from '@material-ui/icons/Close';
import { NavLogo } from "../Navbar/Navbar.styles";
import {MenuTop, MenuTextContainer, MenuText} from "./Menu.styles"

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="Menu">
        <MenuTop>
            <NavLogo src="./images/myNews.svg" />
            <CloseIcon onClick={closeMenu} style={{ 
                            fontSize: 33,
                            cursor: "pointer"
                        }}/>
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
    </div>
  );
}

export default Menu;
