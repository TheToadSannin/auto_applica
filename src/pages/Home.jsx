import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  document.getElementsByTagName("title")[0].text="Home"
  return (
    <div>
        <Header/>
            
        <Footer/>
    </div>
  )
}

export default Home