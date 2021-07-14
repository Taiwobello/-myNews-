import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../../App.styles'
import News from '../News/News'
import { StyledNewsList } from "./NewsList.styles"


function NewsList() {
    const {news} = useSelector(state => state.generalNews)
    // const topNews = news.articles
    console.log(news)

    return (
        <StyledNewsList>
            <Container>
                {
                    // news.articles.slice(5).map((article, index) => <News key={index} article={article} index={index} />)
                }
            </Container>
            
        </StyledNewsList>            
    )
}

export default NewsList
