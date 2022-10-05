const fetchHeadlines = async () => {
  try {
    const key = process.env.REACT_APP_API_KEY
    const URL = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${key}&country=br`)
    const objectData = await URL.json()
    return objectData.articles
  } catch (error) {
    console.error(error)
  }
}

export default fetchHeadlines;
