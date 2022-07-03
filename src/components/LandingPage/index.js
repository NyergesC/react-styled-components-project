import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import Typical from 'react-typical'
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
            <LandingH1>Welcome to my Portfolio</LandingH1>
            <LandingP>Hi, my name is Cintia Nyerges</LandingP> 
            <LandingP>I'm <Typical loop={Infinity} steps={["Frontend Web Developer", 1000, "Webdesigner", 1000, "Enthusiastic Dev", 1000, "React Dev", 1000]}/></LandingP> 
            <LandingBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>My Projects {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </LandingBtnWrapper>
        </LandingContent>
     </LandingContainer>

    </>
  )
}

export default LandingPage