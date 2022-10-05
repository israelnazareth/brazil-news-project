import React, { useEffect, useState } from 'react'
import fetchHeadlines from '../../services/fetchApi'
import './Headlines.css'

export default function Headlines() {
  const [articles, setArticles] = useState([])

  const getHeadlines = async () => {
    const articlesAPI = await fetchHeadlines()
    setArticles(articlesAPI)
  }

  useEffect(() => { getHeadlines() }, [])

  console.log(articles);

  return (
    <div className='main'>
      {articles.map(({ url, urlToImage, title, source, description}, i) => {
      return ( urlToImage ? 
        <a href={url} key={i}>
          <div className='card' style={{backgroundImage: `url("${urlToImage}"`}}>
            <p className='cardSource'>{(source.name).toUpperCase()}</p>
            <div className="cardTexts">
              <h1 className='cardTitle'>{title}</h1>
              <p className='cardDescription'>{description}</p>
            </div>
          </div>
        </a> : null
      )
  })}
    </div>
  )
}
