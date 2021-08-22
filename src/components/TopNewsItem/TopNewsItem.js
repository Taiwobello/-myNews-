import React from 'react'
import { StyledTopNewsItem, TopNewsItemImage, TopNewsItemTitle } from './TopNewsItem.styles'

function TopNewsItem({article, index}) {
    const {urlToImage, title, url} = article
    // const {urlToImage, publishedAt, description, title, url} = article
    console.log(urlToImage)
    return (
        <StyledTopNewsItem className={`newsItem-${index}`}>
            <div className="overlay">

            </div>
            <TopNewsItemImage src={urlToImage} />
            <TopNewsItemTitle href={url}>{title}</TopNewsItemTitle>
        </StyledTopNewsItem>
    )
}

export default TopNewsItem
