import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import './Cards.css'

export default function Cards() {
  const { articles } = useContext(MyContext)

  return (
    <>
      {articles?.articles?.map((article, i) => {
        return (
          <a href={article.url} key={i} target='blank'>
            <div className='card' style={{backgroundImage: `url("${article.image}"`}}>
              <p className='cardSource'>{(article.source.name).toUpperCase()}</p>
              <div className='cardTexts'>
                <h1 className='cardTitle'>{article.title}</h1>
                <p className='cardDescription'>{article.description}</p>
              </div>
            </div>
          </a>
        )
      })}
    </>
  )
}
