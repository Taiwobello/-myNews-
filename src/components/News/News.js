import React from 'react'
import {NewsImage, NewsText, NewsTitle, StyledNews, StyledNewsDescription} from "./News.styles"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Container } from '../../App.styles';


function News({article}) {
    const {urlToImage, publishedAt, description, title} = article
    return (
        <StyledNews>
                <NewsImage src={urlToImage} />
                <StyledNewsDescription>
                    <NewsTitle>{title}</NewsTitle>
                    <NewsText>{description}</NewsText>
                </StyledNewsDescription>            
        </StyledNews>
    )
}

export default News
