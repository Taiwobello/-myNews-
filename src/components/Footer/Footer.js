import React from "react";

import {
  StyledFooter,
  FooterIconContainer,
  FooterTextContainer,
  FooterLink
} from "./Footer.styles";

import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer({ loading, error }) {
  
  return (
    <StyledFooter loading={loading} error={error}>
      {/* <FooterContainer> */}
        <FooterIconContainer>
        <FooterLink href="https://github.com/Taiwobello">
          <GitHubIcon
            style={{
              color: "white",
            }}
          />
        </FooterLink>
        <FooterLink>
          <InstagramIcon
            style={{
              color: "white",
            }}
          />
        </FooterLink>
        <FooterLink href="https://twitter.com/Latmanxx?s=08">
          <TwitterIcon
            style={{
              color: "white",
            }}
          />
        </FooterLink>
          
          
        </FooterIconContainer>
        <FooterTextContainer>
          <p>
            Powered by <a href="https://newsapi.org/">Newsapi</a> @ 2021 Bello Taiwo
          </p>
        </FooterTextContainer>
      {/* </FooterContainer> */}
      
    </StyledFooter>
  );
}

export default Footer;
