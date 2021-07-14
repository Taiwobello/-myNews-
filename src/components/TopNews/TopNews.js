import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../../App.styles'
import TopNewsItem from '../TopNewsItem/TopNewsItem'
import { StyledTopNews } from './TopNews.styles'

function TopNews() {
    const {news, loading} = useSelector(state => state.generalNews)
    // const topNews = news.articles.splice(0, 4)
    // console.log(news)
    // console.log(topNews)
    console.log(loading)
    console.log(news)
    return (
        <StyledTopNews>
            <Container>
                {
                    // loading ? 
                    //     <div className="lds-ripple"><div></div><div></div></div>
                    // : topNews.map((article, index) => <TopNewsItem key={index} article={article} index={index} />)
                }
            </Container>
            
        </StyledTopNews>
            
    )
}

export default TopNews
