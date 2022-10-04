import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <header>Brazil News</header>
      <GiHamburgerMenu className="menuIcon"/>
    </div>
  )
}
