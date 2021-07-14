const fetchNews = (url, newsCategory) => {
    return async (dispatch) => {
        const response = await fetch(url)
        const data = response
        data.json().then(data => {
            const news = data
            dispatch(newsCategory(news))
        })
    }
}

export default fetchNews;