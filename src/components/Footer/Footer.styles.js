import styled from "styled-components";
import { device } from "../../screenSize";

export const StyledFooter = styled.div`
    background-color: ${(props) => props.theme.colorPrimary};
    color: white;
    text-align: center;
    padding: 2rem 0;
    position: ${(props) => props.loading ? "absolute" : props.error ? "absolute" : "relative"};
    bottom: 0;
    left: 0;
    width: 100%;

    & .MuiSvgIcon-root{
      font-size: 30px;
    }
`;


// export const FooterContainer = styled.div`
//   /*  */
//   width: 100%;
//   height: 100%;
//   bottom: 0;
//   left: 0;
// `

export const FooterIconContainer = styled.div`
  & * {
    /* margin-left: 3rem; */
  }
`;

export const FooterTextContainer = styled.div`
  font-size: 1.8rem;
  @media ${device.mobileS}{
        font-size: 1.3rem;
    }
    & a{
      color: white;
    }
`;

export const Footer = styled.div``;

export const FooterLink = styled.a`
  margin-left: 3rem;
  cursor: pointer;
`;