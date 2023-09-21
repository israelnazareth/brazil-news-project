export const fetchByCategory = async (category) => {
  try {
    const key = process.env.REACT_APP_API_KEY
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=br&max=12&apikey=${key}`)
    const data = await response.json()
    return data.articles
  } catch (error) {
    console.error('Something went wrong! => ', error.message)
  }
}
