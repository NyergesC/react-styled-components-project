import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import  {IconContext} from 'react-icons'
import { animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
      if(window.scrollY >= 80) {
          setScrollNav(true)
      } else {
          setScrollNav(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
      scroll.srcollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Portfolio</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='project' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='cv' smooth={true} duration={500} spy={true} exact='true' offset={-80}>My CV</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>

    </>
  )
}

export default Navbar