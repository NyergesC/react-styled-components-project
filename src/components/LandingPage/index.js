import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import { LandingContainer, LandingBg, VideoBg, LandingContent, LandingH1, LandingP, LandingBtnWrapper, ArrowForward, ArrowRight} from './LandingElements'


const LandingPage = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
 

  return (
    <>
     <LandingContainer>
        <LandingBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </LandingBg>
        <LandingContent>
            <LandingH1>Cintia Nyerges</LandingH1>
            <LandingP>Hi, I am a Web Designer and Frontend Developer with a passion for learning and creating</LandingP>
            <LandingBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>My Projects {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </LandingBtnWrapper>
        </LandingContent>


     </LandingContainer>

    </>
  )
}

export default LandingPage