import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { StyledEntertainmentPage } from "./EntertainmentPage.styles"

import NewsList from '../../components/NewsList/NewsList'
import TopNews from '../../components/TopNews/TopNews'
import fetchNews from '../../redux/fetchNews'
import { fetchEntertainmentFailure, fetchEntertainmentNewsSuccess, fetchNewsEntertainment } from '../../redux/entertainmentNews/entertainmentNewsAction'
import { useDispatch } from 'react-redux'
import Footer  from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'


import { fetchNewsHealth } from '../../redux/healthNews/healthNewsAction'
import { fetchNewsGeneral } from '../../redux/generalNews/generalNewsAction'
import { fetchNewsBusiness } from "../../redux/businessNews/businessNewsAction";
import { fetchNewsSports } from "../../redux/sportNews/sportNewsAction";

const newsCategory = {
  fetchNewsSuccess: fetchEntertainmentNewsSuccess,
  fetchNews: fetchNewsEntertainment,
  fetchNewsFaliure: fetchEntertainmentFailure
}

function EntertainmentPage() {
    const dispatch = useDispatch()
    const {news, loading, error} = useSelector(state => state.entertainmentNews)
    useEffect(() => {
        dispatch(fetchNewsGeneral())
        dispatch(fetchNewsBusiness())
        dispatch(fetchNewsSports())
        dispatch(fetchNewsHealth())
        dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=12b83a9e50ee4f46b0c88df4d83044db', newsCategory))
    }, [dispatch])

    return (
        <StyledEntertainmentPage>
            <Navbar />
            <TopNews news={news} loading={loading}  error={error} />
            <NewsList news={news} loading={loading}  error={error}/>
            <Footer loading={loading} error={error}/>
        </StyledEntertainmentPage>
    )
}

export default EntertainmentPage
