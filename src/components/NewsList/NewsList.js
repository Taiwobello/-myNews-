import React from 'react'
import { Container } from '../../App.styles'
import News from '../News/News'
import { StyledNewsList } from "./NewsList.styles"


function NewsList({news, loading, error}) {
    // const  = useSelector(state => state.generalNews)
    let newsList =  []
    if (!loading && !error){
        newsList = news.articles.slice(5)
    }
    return (
        <StyledNewsList>
            <Container>
                {
                    loading ? null : 
                    error ? "" :
                    newsList.map((article, index) => <News key={index} article={article} index={index} />)
                }
            </Container>
            
        </StyledNewsList>            
    )
}

export default NewsList
