import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularDishes from './components/PopularDishes'
import Services from './components/Services'
import Menu from './components/Menu'
import DeliveryProcess from './components/DeliveryProcess'
import Reservation from './components/Reservation'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Chefs from './components/Chefs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PopularDishes/>
      <Menu/>
      <Services/>
      <Reservation/>
      <DeliveryProcess/>
      <Testimonials/>
      <Chefs/>
      <Gallery/>
      <Blogs/>
      <DownloadApp/>
      <Footer/>
    </div>
  )
}

export default App