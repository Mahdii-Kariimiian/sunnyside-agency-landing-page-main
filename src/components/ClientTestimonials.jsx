import React from 'react'
import './cssFiles/testimonials.css'

function ClientTestimonials(props) {
  return (
    
    <div className="testimonials">
        <img className="testimonials__image" src={props.src} alt="" />
        <p className="testimonials__opinion">{props.opinion}</p>
        <p className="testimonials__name">{props.name}</p>
        <p className="testimonials__position">{props.position}</p>
    </div>
  )
}

export default ClientTestimonials
