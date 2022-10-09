import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import './Cards.css'

export default function Cards() {
  const { articles } = useContext(MyContext)

  return (
    <>
      { articles.map((article, i) => {
        if (!article.urlToImage) { articles.splice(i, 1) }
        return (
          <a href={article.url} key={i} target='blank'>
            <div className='card' style={{backgroundImage: `url("${article.urlToImage}"`}}>
              <p className='cardSource'>{(article.source.name).toUpperCase()}</p>
              <div className='cardTexts'>
                <h1 className='cardTitle'>{article.title}</h1>
                <p className='cardDescription'>{article.description}</p>
              </div>
            </div>
          </a>
        )
      }).slice(0, 12) }
    </>
  )
}
