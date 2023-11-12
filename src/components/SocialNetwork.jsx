import React from 'react'
import "../components/cssFiles/footer.css"

function SocialNetwork (props) {
  return (
    <div className='social-network__social-icons'>
        <img 
          aria-hidden={props.aria} 
          src={props.svg} 
          alt={props.aria}
         
         />
    </div>
  )
}

export default SocialNetwork
