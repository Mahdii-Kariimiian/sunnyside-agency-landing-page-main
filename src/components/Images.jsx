import React from 'react'
import "../components/cssFiles/images-section.css"

export default function Images (props) {
    console.log(props)
  return (
    <img className="images" src={props.src} alt="" />
  )
}
