import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import Cards from '../Cards/Cards'
import './MainPage.css'

export default function Headlines() {
  const { articles } = useContext(MyContext)

  return (
    <div>
      { articles.length ? <div>
        <h1 className='newsType' id="home">{articles[0].type}</h1>
        <div className='main'>
          <Cards />
        </div>
      </div> : <h1 className="noService">Desculpe o transtorno, estamos fora do ar no momento.</h1>}
    </div>
  )
}
