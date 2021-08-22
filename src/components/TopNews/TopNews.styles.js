import styled from "styled-components";
import { Container } from '../../App.styles'
import { device } from "../../screenSize";


export const StyledTopNews = styled.div`
    margin-top: 4rem;

    & ${Container}{
        display: flex;
        justify-content: center;

        

        & .lds-ripple{
            grid-column: 1 / -1;
            justify-self: center;
        }
    }
`
export const TopNewsListContainer = styled.div`
    display: grid;
        grid-template-columns: repeat(2, minmax(150px, 500px)) minmax(80px, 300px);
        grid-template-rows: repeat(2,180px);
        justify-content: center;
        gap: 2rem;

        @media ${device.tabletL}{
            grid-template-rows: repeat(2,120px);
            gap: 1rem;
        }

        @media ${device.tablet}{
            grid-template-columns: repeat(4, minmax(120px, 500px));
        }

        /* @media ${device.tablet}{
            grid-template-columns: repeat(4, minmax(120px, 500px));
        } */

        @media ${device.mobile}{
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2,100px);
        }
`
export const Error = styled.h3`
    justify-content: center;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colorPrimary};
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 4rem;
    text-align: center;

    @media ${device.mobile}{
        font-size: 2rem;
        font-weight: 500;
    }
`