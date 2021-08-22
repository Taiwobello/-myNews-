import styled from "styled-components";
import { device } from "../../screenSize";

export const StyledTopNewsItem = styled.div`
    border-radius: 30px;
    position: relative;
    &.newsItem-3{
        grid-row: 2 / 3;
        grid-column: 3 / -1;
    }
    &.newsItem-1{
        grid-row: 1 / 3;
    }
    &.newsItem-2{
        grid-row: 1 / 3;
    }

    @media ${device.tablet}{
        &.newsItem-3{
            grid-row: 1 / 3;
            grid-column: 3 / 4;
        }
        &.newsItem-0{
            grid-row: 1 / 3;
            grid-column: 4 / 5;
        }
    }
    @media ${device.mobile}{
        &.newsItem-3{
            grid-row: 2 / 3;
            grid-column: 3 / span 2;
        }
        &.newsItem-1{
            grid-row: 1 / 2;
            grid-column: 3 / span 2;
        }
        &.newsItem-2{
            grid-row: 2 / 3;
            grid-column: 1 / span 2;
        }
        &.newsItem-0{
            grid-row: 1 / 2;
            grid-column: 1 / span 2;
        }
    }

    & .overlay{
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.3;
        position: absolute;
        border-radius: 30px;
    }
`

export const TopNewsItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius: 29px;
`

export const TopNewsItemText = styled.p``

export const TopNewsItemTitle = styled.a`
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    color: white;
    padding: 0 1rem;
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 700;

    &:hover{
        text-decoration: underline;
    }
    @media ${device.tabletL}{
        font-size: 1.4rem;
        line-height: 1.5rem;
        font-weight: 600;
    }
    @media ${device.mobile}{
        padding: 0 0.5rem;
        font-size: 1.3rem;
        line-height: 1.3rem;
        }
`