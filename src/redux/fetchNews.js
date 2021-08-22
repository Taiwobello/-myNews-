const axios = require('axios').default;


const fetchNews = (url, newsCategory) => {
    const {fetchNewsSuccess, fetchNewsFaliure, fetchNews} = newsCategory
    return function(dispatch) {
        dispatch(fetchNews())
        axios.get(url)
            .then(response => {
                const news = response.data
                dispatch(fetchNewsSuccess(news))
            })
            .catch(error => {
                console.log(error.message)
                dispatch(fetchNewsFaliure(error.message))
            })
    }
}

export default fetchNews;