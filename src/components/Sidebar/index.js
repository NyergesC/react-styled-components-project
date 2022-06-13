import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = () => {
  return (
    <>
     <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'>About</SidebarLink>
                <SidebarLink to='about'>Projects</SidebarLink>
                <SidebarLink to='about'>Contact</SidebarLink>
                <SidebarLink to='about'>Sign Up</SidebarLink>
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