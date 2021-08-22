import React from 'react'
import {NewsDate, NewsImage, NewsText, NewsTitle, StyledNews, StyledNewsDescription} from "./News.styles"
import moment from "moment"


function News({article}) {
    const {urlToImage, publishedAt, description, title, url} = article
    
    var now = moment(new Date()); //todays date
    var end = moment(new Date(publishedAt)); // another date
    var duration = moment.duration(now.diff(end));
    var hours = duration._data.hours
    console.log(hours, publishedAt)
    return (
        <StyledNews>
            <div className="newsContainer">
                    <NewsImage src={urlToImage ? urlToImage : "./images/news.png"} />
                    <StyledNewsDescription>
                        <NewsTitle>{title}</NewsTitle>
                        <NewsText>{description}</NewsText>
                        <NewsDate>{hours} hrs ago</NewsDate>
                        <a href={url}>Read more &#8594;</a>
                    </StyledNewsDescription>   
            </div>
        </StyledNews>
    )
}

export default News
