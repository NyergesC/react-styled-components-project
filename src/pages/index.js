import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data'
import Project from '../components/Projects'
import Skill from '../components/Skills'
import Contact from '../components/Contact/contact'

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
{/*       <InfoSection {...homeObjOne}/>  */}
      <Project />
      <InfoSection {...homeObjThree}/>
      <Skill />
      <Contact />


    </>
  )
}

export default Home