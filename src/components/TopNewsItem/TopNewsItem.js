import React from 'react'
import { StyledTopNewsItem, TopNewsItemImage } from './TopNewsItem.styles'

function TopNewsItem({article, index}) {
    const {urlToImage} = article
    console.log(urlToImage)
    return (
        <StyledTopNewsItem className={`newsItem-${index}`}>
            <TopNewsItemImage src={urlToImage} />
        </StyledTopNewsItem>
    )
}

export default TopNewsItem
