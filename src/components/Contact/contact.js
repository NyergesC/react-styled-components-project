import React from 'react';
/* import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg' */
import {ContactContainer, ContactH1, ContactWrapper, ContactCard, ContactIcon, SendButton, ContactH2, ContactH4, ContactP} from './ContactElements';


const Contact = () => {
  return (
    <>
        <ContactContainer id='contact'>
            <ContactH1>Contact Me</ContactH1>
            <ContactWrapper>
                <ContactCard>
                    <ContactIcon />
                    <SendButton href='#' target="_blank">Send a message</SendButton>
                    <ContactH2>E-mail</ContactH2>
                    <ContactH4>cintia.nyerges@gmail.com</ContactH4>
                </ContactCard>
                <ContactCard>
                    <ContactIcon />
                    <SendButton href='https://www.facebook.com/cintia.nyerges' target="_blank">Send a message</SendButton>
                    <ContactH2>Facebook</ContactH2>
                    <ContactH4>facebook.com/cintia.nyerges</ContactH4>
                </ContactCard>
                <ContactCard>
                    <ContactIcon />
                    <SendButton href='https://www.linkedin.com/in/cintia-nyerges/' target="_blank">Send a message</SendButton>
                    <ContactH2>Linkedin</ContactH2>
                    <ContactH4>linkedin.com/in/cintia-nyerges/</ContactH4>
                </ContactCard>
                <ContactCard>
                    <ContactIcon />
                    <SendButton href='https://github.com/NyergesC' target="_blank">Send a message</SendButton>
                    <ContactH2>Github</ContactH2>
                    <ContactH4>github.com/NyergesC</ContactH4>
                </ContactCard>
            </ContactWrapper>
        </ContactContainer>
    </>
  )
}

export default Contact