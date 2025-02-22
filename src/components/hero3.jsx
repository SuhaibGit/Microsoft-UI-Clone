import React from 'react'
import heroimg from "../assets/hero3.jpg"
const Hero3 = () => {
  return (
    <div className="hero3">
        <img
        src= {heroimg}
        alt= "asd"
        />
        <div class="hero3-content">
        <h2>Organize your life</h2>
        <p>keep you ideas and notes organised with OneNote</p>
        <a href="/internship">
        <button>Learn more</button>
        </a>
        </div>
    </div>
  )
}

export default Hero3