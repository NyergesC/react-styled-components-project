import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import InfoSection from '../components/InfoSection'
import { homeObjThree } from '../components/InfoSection/Data'
import Project from '../components/Projects'
import Skill from '../components/Skills'
import Contact from '../components/Contact/contact'
import Footer from '../components/Footer/footer'

const Home  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <LandingPage />
      <Project />
      <InfoSection {...homeObjThree}/>
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default Home