/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import MyContext from "../../context/MyContext";
import { fetchByCategory } from "../../services/fetchApi";
import './Header.css'

export default function Header() {
  const { setArticles } = useContext(MyContext)

  const getNewsByCategory = async (category = 'general', type = 'Geral') => {
    const articlesAPI = await fetchByCategory(category)
    const articlesWithType = await articlesAPI.map(item => ({ ...item, type }))
    setArticles(articlesWithType)
  }

  useEffect(() => { getNewsByCategory() }, [])

  return (
    <div className="header">
      <h2 className="logo" onClick={() => getNewsByCategory('general', 'Geral')}>Brazil News</h2>
      <GiHamburgerMenu className="menuIcon"/>
      <p className="itemNavbar" onClick={() => getNewsByCategory('general', 'Geral')}>Geral</p>
      <p className="itemNavbar" onClick={() => getNewsByCategory('business', 'Negócios')}>Negócios</p>
      <p className="itemNavbar" onClick={() => getNewsByCategory('entertainment', 'Entretenimento')}>Entretenimento</p>
      <p className="itemNavbar" onClick={() => getNewsByCategory('health', 'Saúde')}>Saúde</p>
      <p className="itemNavbar" onClick={() => getNewsByCategory('science', 'Ciência')}>Ciência</p>
      <p className="itemNavbar" onClick={() => getNewsByCategory('sports', 'Esporte')}>Esporte</p>
      <p className="itemNavbar" onClick={() => getNewsByCategory('technology', 'Tecnologia')}>Tecnologia</p>
    </div>
  )
}
