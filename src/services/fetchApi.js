export const fetchByCategory = async (category) => {
  try {
    // const key = process.env.REACT_APP_API_KEY
    const URL = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=787e45b081b0434f930304450f627e2f&country=br&category=${category}`)
    const objectData = await URL.json()
    return objectData.articles
  } catch (error) {
    console.error('Something went wrong! => ', error.message)
  }
}
