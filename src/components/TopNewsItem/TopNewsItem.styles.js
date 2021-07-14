import styled from "styled-components";

export const StyledTopNewsItem = styled.div`
    border-radius: 30px;
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
`

export const TopNewsItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius: 29px;
`

export const TopNewsItemText = styled.p``

export const TopNewsItemTitle = styled.p``
