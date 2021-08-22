import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {StyledHealthPage} from "./HealthPage.styles"


import NewsList from '../../components/NewsList/NewsList'
import TopNews from '../../components/TopNews/TopNews'
import fetchNews from '../../redux/fetchNews'
import { fetchHealthFailure, fetchHealthNewsSuccess, fetchNewsHealth } from '../../redux/healthNews/healthNewsAction'
import { useDispatch } from 'react-redux'
import Footer  from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'

import { fetchNewsEntertainment } from "../../redux/entertainmentNews/entertainmentNewsAction";
import { fetchNewsGeneral } from '../../redux/generalNews/generalNewsAction'
import { fetchNewsBusiness } from "../../redux/businessNews/businessNewsAction";
import { fetchNewsSports } from "../../redux/sportNews/sportNewsAction";


const newsCategory = {
  fetchNewsSuccess: fetchHealthNewsSuccess,
  fetchNews: fetchNewsHealth,
  fetchNewsFaliure: fetchHealthFailure
}

function HealthPage() {
    const dispatch = useDispatch()
    const {news, loading, error} = useSelector(state => state.healthNews)
    useEffect(() => {
        dispatch(fetchNewsGeneral())
        dispatch(fetchNewsBusiness())
        dispatch(fetchNewsSports())
        dispatch(fetchNewsEntertainment())
        dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=12b83a9e50ee4f46b0c88df4d83044db', newsCategory))
    }, [dispatch])

    
    return (
        <StyledHealthPage>
            <Navbar />
            <TopNews news={news} loading={loading} error={error} />
            <NewsList news={news} loading={loading} error={error} />
            <Footer loading={loading} error={error}/>
        </StyledHealthPage>
    )
}

export default HealthPage
