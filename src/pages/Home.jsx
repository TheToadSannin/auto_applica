import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import image1 from '../assets/guyInRed.png';
import image2 from '../assets/undraw_real_time_sync.svg'

const Home = () => {
  document.getElementsByTagName("title")[0].text="Home"


  return (
    <main>
      <div>
        <h1>We are <span><u>AUTO</u>-<u>APPLICA</u></span></h1>
        <div>
          <img src={image1} alt="" width={"100%"}/>
          <p><span>Streamline</span> Your Application Submissions: Go <span>Paperless</span> and Submit Applications Online <span>Effortlessly.</span></p>
        </div>
        <h1><span>What</span> are We?</h1>
        <div>
          <p>We are a platform dedicated to <span>empowering</span> students and facilitating <span>seamless</span> communication with their class teachers. <br/> Our mission is to provide a <span>secure</span> and efficient way for students to submit applications online, eliminating the need for physical submissions.</p>
          <img src={image2} alt="" width={"100%"}/>
        </div>
      </div>
    </main>
  )
}

export default Home