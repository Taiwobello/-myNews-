import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {StyledSportPage} from "./SportPage.styles"



import NewsList from '../../components/NewsList/NewsList'
import TopNews from '../../components/TopNews/TopNews'
import fetchNews from '../../redux/fetchNews'
import { fetchNewsSports, fetchSportFailure, fetchSportNewsSuccess } from '../../redux/sportNews/sportNewsAction'
import { useDispatch } from 'react-redux'
import Footer  from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'

import { fetchNewsHealth } from "../../redux/healthNews/healthNewsAction";
import { fetchNewsEntertainment } from "../../redux/entertainmentNews/entertainmentNewsAction";
import { fetchNewsGeneral } from '../../redux/generalNews/generalNewsAction'
import { fetchNewsBusiness } from "../../redux/businessNews/businessNewsAction";


const newsCategory = {
  fetchNewsSuccess: fetchSportNewsSuccess,
  fetchNews: fetchNewsSports,
  fetchNewsFaliure: fetchSportFailure
}

function SportPage() {
    const dispatch = useDispatch()
    const {news, loading, error} = useSelector(state => state.sportsNews)
    
    useEffect(() => {
        dispatch(fetchNewsGeneral())
        dispatch(fetchNewsBusiness())
        dispatch(fetchNewsHealth())
        dispatch(fetchNewsEntertainment())
        dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=12b83a9e50ee4f46b0c88df4d83044db', newsCategory))
    }, [dispatch])

    
    return (
        <StyledSportPage>
            <Navbar />
            <TopNews news={news} loading={loading} error={error} />
            <NewsList news={news} loading={loading} error={error}/>
            <Footer loading={loading} error={error}/>
        </StyledSportPage>
    )
}

export default SportPage
