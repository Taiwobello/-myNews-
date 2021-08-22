import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { StyledBussinessPage } from "./BussinessPage.styles"

import NewsList from '../../components/NewsList/NewsList'
import TopNews from '../../components/TopNews/TopNews'
import fetchNews from '../../redux/fetchNews'
import { fetchBusinessFailure, fetchBusinessNewsSuccess, fetchNewsBusiness } from '../../redux/businessNews/businessNewsAction'
import { useDispatch } from 'react-redux'
import Footer  from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'

import { fetchNewsSports } from "../../redux/sportNews/sportNewsAction";
import { fetchNewsHealth } from "../../redux/healthNews/healthNewsAction";
import { fetchNewsEntertainment } from "../../redux/entertainmentNews/entertainmentNewsAction";
import { fetchNewsGeneral } from '../../redux/generalNews/generalNewsAction'

const newsCategory = {
  fetchNewsSuccess: fetchBusinessNewsSuccess,
  fetchNews: fetchNewsBusiness,
  fetchNewsFaliure: fetchBusinessFailure
}

function BussinessPage() {
    const dispatch = useDispatch()
    const {news, loading, error} = useSelector(state => state.businessNews)
    useEffect(() => {
        
        dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=12b83a9e50ee4f46b0c88df4d83044db', newsCategory))
        dispatch(fetchNewsGeneral())
        dispatch(fetchNewsSports())
        dispatch(fetchNewsHealth())
        dispatch(fetchNewsEntertainment())
    }, [dispatch])
    
    return (
        <StyledBussinessPage>
            <Navbar />
            <TopNews news={news} loading={loading} error={error} />
            <NewsList news={news} loading={loading} error={error} />
            <Footer loading={loading} error={error} />
        </StyledBussinessPage>
    )
}

export default BussinessPage
