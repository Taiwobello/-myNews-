import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import NewsList from '../../components/NewsList/NewsList'
import TopNews from '../../components/TopNews/TopNews'
import fetchNews from '../../redux/fetchNews'
import { fetchGeneralNewsSuccess } from '../../redux/generalNews/generalNewsAction'
import { HomePageLogo, HomePageStyle, HomePageTitle, HomePageTitleText } from './HomePage.styles'

function HomePage() {
    const dispatch = useDispatch
    
    useEffect(() => {
        dispatch(fetchNews("https://newsapi.org/v2/top-headlines?country=ng&apiKey=12b83a9e50ee4f46b0c88df4d83044db", fetchGeneralNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=sport&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
    }, [])
    return (
        <HomePageStyle>
            <Navbar />
            <HomePageTitle>
                <HomePageTitleText>Welcome to</HomePageTitleText>
                <HomePageLogo src="./images/myNews3.png" />
            </HomePageTitle>
            <TopNews />
            <NewsList />
        </HomePageStyle>
    )
}

export default HomePage
