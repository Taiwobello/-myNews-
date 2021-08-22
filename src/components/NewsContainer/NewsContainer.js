import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import fetchNews from '../../redux/fetchNews'
// import { fetchGeneralNewsSuccess, fetchNewsGeneral, fetchNewsSports } from '../../redux/generalNews/generalNewsAction'
// import { fetchSportNewsSuccess } from '../../redux/sportNews/sportNewsAction'

function NewsContainer() {
    const news = useSelector(state => state.generalNews)
    // const dispatch = useDispatch()
    
    // useEffect(() => {
        // dispatch(fetchNews("https://newsapi.org/v2/top-headlines?country=ng&apiKey=12b83a9e50ee4f46b0c88df4d83044db", fetchGeneralNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=sport&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
        // dispatch(fetchNews('https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=12b83a9e50ee4f46b0c88df4d83044db', fetchSportNewsSuccess))
    // }, [])
    // const savedData = localStorage.getItem("persistanceState");
    // const data = JSON.parse(savedData)
    // console.log(data.generalNews.news)
    console.log(news.news)
    return (
        <div>
            
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchNewsData: () => dispatch(fetchNews()),
//         // addUser: (user) => dispatch(postUser(user))
//     }
// }

// export default connect(null, mapDispatchToProps)(NewsContainer)

export default NewsContainer
