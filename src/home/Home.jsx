import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Inventory from '../components/Inventory'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Inventory/>
        <Footer/>
    </>
  )
}

export default Home