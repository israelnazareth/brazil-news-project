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

  const showCategories = () => {
    const list = document.querySelector('.listNavbar');
      window.innerWidth < 900 ? list.classList.toggle('opened') : list.classList.remove('opened')
  }

  useEffect(() => { getNewsByCategory() }, [])

  return (
    <div className="header">
      <div className="headerContent">
        <h2 className="logo" onClick={() => getNewsByCategory()}>Brazil News</h2>
        <ul className="listNavbar">
          <li className="itemNavbar" onClick={() => getNewsByCategory('general', 'Geral') && showCategories()}>Geral</li>
          <li className="itemNavbar" onClick={() => getNewsByCategory('business', 'Negócios') && showCategories()}>Negócios</li>
          <li className="itemNavbar" onClick={() => getNewsByCategory('entertainment', 'Entretenimento') && showCategories()}>Entretenimento</li>
          <li className="itemNavbar" onClick={() => getNewsByCategory('health', 'Saúde') && showCategories()}>Saúde</li>
          <li className="itemNavbar" onClick={() => getNewsByCategory('science', 'Ciência') && showCategories()}>Ciência</li>
          <li className="itemNavbar" onClick={() => getNewsByCategory('sports', 'Esporte') && showCategories()}>Esporte</li>
          <li className="itemNavbar" onClick={() => getNewsByCategory('technology', 'Tecnologia') && showCategories()}>Tecnologia</li>
        </ul>
        <GiHamburgerMenu className="menuIcon" onClick={() => showCategories()}/>
      </div>
    </div>
  )
}
