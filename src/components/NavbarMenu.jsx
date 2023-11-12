import React from 'react'
import "./cssFiles/nav.css"

function NavbarMenu(props) {
  return (
    <ul className="nav__menuitems__menu">
      <li className="nav__menu-items__menu-item">{props.menuItem}</li>
    </ul>
  )
}

export default NavbarMenu
