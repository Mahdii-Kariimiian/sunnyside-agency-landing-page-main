import React from 'react'
import "./cssFiles/box.css"

function Box(props) {
  return (
    <div style={props.src ? ({backgroundImage:`url(${props.src})`})
        : null } className={props.class}>

      {props.title ? (<h1 className="box__title" >{props.title}</h1>)
      : null} 

      {props.text ? (<p className="box__text">{props.text}</p>) 
      : null }
      
      {props.button ? (
      <button className="box__button" >{props.button}</button> ) 
      : null }
    </div>
  )
}

export default Box
