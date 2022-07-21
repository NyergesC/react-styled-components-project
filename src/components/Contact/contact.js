import React from 'react';
import Icon1 from '../../images/svg-9.svg';
import Icon2 from '../../images/svg-10.svg';
import {ContactContainer, ContactH1, ContactWrapper, ContactCard, ContactIcon, SendButton, ContactH2, ContactH4, ContactP} from './ContactElements';


const Contact = () => {
  return (
    <>
        <ContactContainer id='contact'>
            <ContactH4>Keep in touch</ContactH4>
            <ContactH1>Contact Me</ContactH1>
            <ContactWrapper>
                <ContactCard>
                    <ContactIcon src={Icon1}/>
                    <SendButton href='#' target="_blank">Send a message</SendButton>
                    <ContactH2>E-mail</ContactH2>
                    <ContactP>cintia.nyerges@gmail.com</ContactP>
                </ContactCard>
                <ContactCard>
                    <ContactIcon src={Icon2}/>
                    <SendButton href='https://www.facebook.com/cintia.nyerges' target="_blank">Send a message</SendButton>
                    <ContactH2>Facebook</ContactH2>
                    <ContactP>facebook.com/cintia.nyerges</ContactP>
                </ContactCard>
                <ContactCard>
                    <ContactIcon />
                    <SendButton href='https://www.linkedin.com/in/cintia-nyerges/' target="_blank">Send a message</SendButton>
                    <ContactH2>Linkedin</ContactH2>
                    <ContactP>linkedin.com/in/cintia-nyerges/</ContactP>
                </ContactCard>
                <ContactCard>
                    <ContactIcon />
                    <SendButton href='https://github.com/NyergesC' target="_blank">Send a message</SendButton>
                    <ContactH2>Github</ContactH2>
                    <ContactP>github.com/NyergesC</ContactP>
                </ContactCard>
            </ContactWrapper>
        </ContactContainer>
    </>
  )
}

export default Contact