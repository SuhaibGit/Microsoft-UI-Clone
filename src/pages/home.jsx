import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/hero'
import List from '../components/hero2'
import Hero3 from '../components/hero3'
import List2 from '../components/hero4'
import Footer from '../components/footer'

const Home = () => {
  return (
   <>
   <header>
    
   <Navbar/>
   </header>
   <Carousel/>
      <List/>
      <Hero3/>
      <List2/>
      {/* <Hero3/> */}
      <Footer/>
   </>
  )
}

export default Home