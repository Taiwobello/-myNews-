import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NewsList from "../../components/NewsList/NewsList";
import TopNews from "../../components/TopNews/TopNews";
import fetchNews from "../../redux/fetchNews";
import { fetchGeneralNewsSuccess, fetchGeneralFailure, fetchNewsGeneral } from "../../redux/generalNews/generalNewsAction";
import { fetchNewsBusiness } from "../../redux/businessNews/businessNewsAction";
import {
  HomePageLogo,
  HomePageStyle,
  HomePageTitle,
  HomePageTitleText,
} from "./HomePage.styles";
import { useSelector } from "react-redux";
import { fetchNewsSports } from "../../redux/sportNews/sportNewsAction";
import { fetchNewsHealth } from "../../redux/healthNews/healthNewsAction";
import { fetchNewsEntertainment } from "../../redux/entertainmentNews/entertainmentNewsAction";

const newsCategory = {
  fetchNewsSuccess: fetchGeneralNewsSuccess,
  fetchNews: fetchNewsGeneral,
  fetchNewsFaliure: fetchGeneralFailure
}

function HomePage() {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.generalNews);

  useEffect(() => {
    
    dispatch(
      fetchNews(
        "https://newsapi.org/v2/top-headlines?country=ng&pageSize=25&apiKey=12b83a9e50ee4f46b0c88df4d83044db",
        newsCategory
      )
    );
    dispatch(fetchNewsBusiness())
    dispatch(fetchNewsSports())
    dispatch(fetchNewsHealth())
    dispatch(fetchNewsEntertainment())
  }, [dispatch]);
  
  return (
    <HomePageStyle>
      <Navbar />
      <HomePageTitle>
        <HomePageTitleText>Welcome to</HomePageTitleText>
        <HomePageLogo src={window.location.origin + "./images/myNews3.png"} />
      </HomePageTitle>
      <TopNews news={news} loading={loading} error={error} />
      <NewsList news={news} loading={loading} error={error}/>
      <Footer loading={loading} error={error} />
    </HomePageStyle>
  );
}

export default HomePage;
