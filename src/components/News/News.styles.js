import styled from "styled-components";
import { device } from "../../screenSize";

export const StyledNews = styled.div`
    border: 1px solid black;
    
    max-width: 900px;
    margin-bottom: 3rem;
    border-radius: 30px;
    padding: 1rem;
    color: ${props => props.theme.colorPrimary};
    
    @media ${device.tabletL}{
        width: 90%;
    }
    @media ${device.tablet}{
        width: 100%;
    }
    @media ${device.mobileL}{
        /* width: 100px; */
        /* max-height: 120px; */
        height: auto;
        /* max-height: 180px; */
        overflow: auto;
    }
    @media ${device.mobileS}{
        padding: .5rem;
    }
    &::after{
        content: "";
        clear: both;
        display: table;
    }
    & .newsContainer{
        display: flex;
        height: 100%;
        position: relative;
        
        @media ${device.mobileL}{
            align-items: center;
        }
    }

    & .imageContainer{
        
    }

    & a{
        position: absolute;
        bottom: 0;
        margin-bottom: 1rem;
        font-size: 1.6rem;
        color: ${props => props.theme.colorPrimary};

        &:hover{
            opacity: 0.8;
        }

        @media ${device.mobileL}{
            font-size: 1.4rem;
            margin-bottom: 0;
            /* padding-left: 0.5rem; */
        }
    }
`

export const StyledNewsDescription = styled.div`
    /* position: relative; */
    margin-bottom: 2rem;
    
`

export const NewsImage = styled.img`
    /* height: 100%; */
    border-radius: 30px;
    width: 250px;
    object-fit: cover;
    /* flex-basis: 300px; */
    height: 200px;
    margin-right: 3rem;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    

    @media ${device.tablet}{
        width: 200px;
        margin-right: 1rem;
    }
    @media ${device.mobile}{
        width: 150px;
        height: 150px;
    }
    @media ${device.mobileL}{
        float: left;
        width: 100px;
        height: 100px;
        
    }
`

export const NewsText = styled.p`
    font-size: 1.8rem;
    @media ${device.tabletL}{
        font-size: 1.3rem;
    }
    @media ${device.mobileS}{
        font-size: 1.2rem;
    }
`

export const NewsTitle = styled.h1`
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    @media ${device.tabletL}{
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    @media ${device.mobileS}{
        font-size: 1.2rem;
        line-height: 1.3rem;
        margin-bottom: 0.5rem;
        padding-right: 0.5rem;
    }
`

export const NewsDate = styled.p`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 4rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    @media ${device.mobileL}{
        font-size: 1.4rem;
        margin-bottom: 0rem;
        margin-right: 1rem;
        /* padding-left: 0.5rem; */
    }
`