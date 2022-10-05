export const fetchByCategory = async (category) => {
  try {
    const key = process.env.REACT_APP_API_KEY
    const URL = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${key}&country=br&category=${category}`)
    const objectData = await URL.json()
    return objectData.articles
  } catch (error) {
    console.log(error.message)
  }
}
