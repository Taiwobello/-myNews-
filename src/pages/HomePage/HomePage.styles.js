import styled from "styled-components";
import { device } from "../../screenSize";


export const HomePageStyle = styled.div`
  min-height: 100%;
`;

export const HomePageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 3rem;
  position: relative;
`;
export const HomePageLogo = styled.img`
  height: 50px;
  color: red;

  @media ${device.mobileL}{
    height: 40px;
  }
`;

export const HomePageTitleText = styled.h1`
  font-size: 2.5rem;
  font-weight: 650;
  color: ${(props) => props.theme.colorPrimary};
  margin-right: 1rem;
`;
