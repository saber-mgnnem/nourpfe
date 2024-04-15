import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import '../components/style/homepage.css'
import InfoSection from '../components/InfoSection'
import Contact from '../components/Contact'
const HomePage = () => {
  return (
    <>
    <div className="containerhomepage">
        <NavBar/>
        <HeroSection></HeroSection>
        <InfoSection></InfoSection>
        <Contact></Contact>
        </div>
    </>
  )
}

export default HomePage