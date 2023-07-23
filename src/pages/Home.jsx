import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  document.getElementsByTagName("title")[0].text="Home"

  const handleSubmit = async(e)=>{
    e.preventDefault();


      const response = await fetch("http://localhost:5000/someData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
  };

  return (
    <div>
        <Header/>
            <form onSubmit={handleSubmit}>
              <button type="submit">Click Here</button>
            </form>
        <Footer/>
    </div>
  )
}

export default Home