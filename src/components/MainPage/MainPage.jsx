import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import './MainPage.css'

export default function Headlines() {
  const { articles } = useContext(MyContext)

  return (
    <div>
      <h1 className='newsType' id="home">{articles.length ? articles[0].type : 'Geral'}</h1>
      <div className='main'>
        {articles.map(({ url, urlToImage, title, source, description}, i) => {
        return ( urlToImage &&
          <a href={url} key={i} target='blank'>
            <div className='card' style={{backgroundImage: `url('${urlToImage}'`}}>
              <p className='cardSource'>{(source.name).toUpperCase()}</p>
              <div className="cardTexts">
                <h1 className='cardTitle'>{title}</h1>
                <p className='cardDescription'>{description}</p>
              </div>
            </div>
          </a>
        )
        })}
      </div>
    </div>
  )
}
