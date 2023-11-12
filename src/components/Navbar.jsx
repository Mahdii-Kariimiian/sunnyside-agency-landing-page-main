import React from 'react'
import NavbarMenu from './NavbarMenu'
import "./cssFiles/nav.css"

function Navbar() {

  const menuList = [
    "About",
    "Services",
    "Projects",
    "contact"
  ]

  const menu = menuList.map((menuItem , index) => {
    return (<NavbarMenu 
              key = {index}
              menuItem={menuItem} />)
  })

  return (
    <nav className="nav">
        <h1 className="nav__logo">sunnyside</h1>  
        <div className="nav__menu-items">{menu}</div>
    </nav>
  )
}

export default Navbar
