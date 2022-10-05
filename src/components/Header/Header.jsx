import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <h2>Brazil News</h2>
      <GiHamburgerMenu className="menuIcon"/>
    </div>
  )
}
