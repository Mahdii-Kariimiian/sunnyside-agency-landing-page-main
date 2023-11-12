import React from 'react'
// import socials from "../data/socials"
import SocialNetwork from './SocialNetwork'
import "../components/cssFiles/footer.css"

function Footer() {

  const socials = [
    {
        id: 1,
        aria: "facebook",
        logo: "/images/icon-facebook.svg"
    } , 
    {
        id: 2,
        aria: "instagram",
        logo: "/images/icon-instagram.svg"
    } , 
    {
        id: 3,
        aria: "twitter",
        logo: "/images/icon-twitter.svg"
    } , 
    {
        id: 4,
        aria: "pinterest",
        logo: "/images/icon-pinterest.svg"
    } 
]
  
    const socialNetworks = socials.map(social => {
        return <SocialNetwork 
            key = {social.id}
            aria = {social.aria}
            svg = {social.logo}
        />
    })

  return (
    <footer className='footer'>
      <h1 className="footer__title"> sunnyside</h1>
      <ul className='footer__menu'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="footer__social-networks">
      {socialNetworks}
      </div>
    </footer>
  )
}

export default Footer
