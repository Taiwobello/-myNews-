import {FETCH_ENTERTAINMENT_NEWS_FAILURE, FETCH_ENTERTAINMENT_NEWS_SUCCESS, FETCH_NEWS_ENTERTAINMENT} from "./entertainmentNewsTypes"

export const fetchNewsEntertainment = () => {
    return {
        type: FETCH_NEWS_ENTERTAINMENT,
    }
}



export const fetchEntertainmentNewsSuccess = (news) => {
    return {
        type: FETCH_ENTERTAINMENT_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchEntertainmentFailure = error => {
    return {
        type: FETCH_ENTERTAINMENT_NEWS_FAILURE,
        payload: error
    }
}

// export const fetchNews = (url) => {
//     return async (dispatch) => {
//         dispatch(fetchNewsRequest)
//         // const response = await fetch("http://api.mediastack.com/v1/news?access_key=7a6b9b7ba16bb6859ff91b14bff82416&limit=100&categories=health,business,entertainment")
//         // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const response = await fetch(url)
//         const data = response
//         data.json().then(data => {
//             const news = data
//             dispatch(fetchNewsSuccess(news))
//         })
//     }
// }

