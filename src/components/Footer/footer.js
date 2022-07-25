import React from 'react'
import {FooterContainer, FooterWrap, FooterP} from './FooterElements'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterP>Nyerges Cintia <AiOutlineCopyrightCircle /> 2022 - All Rights Reserved</FooterP>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer