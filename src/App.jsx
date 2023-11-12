import React from 'react'
// Components
import Navbar from './components/Navbar'
import Box from './components/Box'
import ClientTestimonials from './components/ClientTestimonials'
import Images from './components/Images'
import Footer from './components/Footer'
// Data
import { boxDetails } from './data/boxDetails'
import { clientTestimonials } from './data/clientTestimonials'
import {imagesArray} from "./data/imagesArray"
// CSS
import "../src/components/cssFiles/testimonials.css"
import "../src/components/cssFiles/images-section.css"


function App() {
  
  const boxes = boxDetails.map((box) => {
      return <Box 
          key = {box.id} 
          src = {box.img}
          title = {box.title}
          text = {box.text}
          button = {box.button}
          class = {box.class}
      />
  })

  const testimonials = clientTestimonials.map((testimonial)=> {
    return <ClientTestimonials
        key = {testimonial.id}
        src = {testimonial.src}
        opinion = {testimonial.opinion}
        name = {testimonial.name}
        position = {testimonial.position}
     />
  })

  const images = imagesArray.map((image , index) => {
    console.log(image)
    return <Images
      key = {index} 
      src = {image}
    />
  })


  return (
    <>
      <Navbar />
      {boxes}
      <div className="testimonials-section">
        <h2 className="testimonials__title">CLIENT TESTIMONIALS</h2>
        {testimonials}
      </div>
      <div className="images-section">
        {images}
      </div>
      <Footer />
    </>
  )
}

export default App
