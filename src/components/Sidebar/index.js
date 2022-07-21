import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                <SidebarLink to='project' onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to='cv' onClick={toggle}>My CV</SidebarLink>
                <SidebarLink to='skills' onClick={toggle}>Skills</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
     </SidebarContainer>


    </>
  )
}

export default Sidebar