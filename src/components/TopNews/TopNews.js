import React from "react";
import { Container } from "../../App.styles";
import TopNewsItem from "../TopNewsItem/TopNewsItem";
import { StyledTopNews, TopNewsListContainer, Error } from "./TopNews.styles";

function TopNews({ news, loading, error }) {
  let TopNewsList =  []
  if (!loading && !error){
    TopNewsList = news.articles.slice(0, 4)
  }
  return (
    <StyledTopNews>
      <Container>
        {loading ? (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : error ? (<Error>{"No Network Check Interrnet Connection"}</Error>) : (
          <TopNewsListContainer>
            {TopNewsList
            .map((article, index) => (
              <TopNewsItem key={index} article={article} index={index} error={error} />
            ))}
          </TopNewsListContainer>
            
        )}
      </Container>
    </StyledTopNews>
  );
}

export default TopNews;
