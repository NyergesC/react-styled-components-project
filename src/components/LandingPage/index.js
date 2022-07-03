import React, {useState} from 'react'
import Picture1 from '../../images/portfolio.jpg'
import Typical from 'react-typical'
/* import {Button} from '../ButtonElements'; */
import { LandingContainer, LandingBg, LandingContent, LandingH1, LandingP, LandingBtnWrapper, ArrowForward, ArrowRight, LandingT, RightSide, LeftSide, PictureBg, Button1, Button2} from './LandingElements'


const LandingPage = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
 

  return (
    <>
     <LandingContainer>
        <LandingBg>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        </LandingBg>
        <LandingContent>
            <LeftSide>
{/*                 <LandingP>Hello</LandingP> */}
                <LandingP>Hello, There!</LandingP> 
                <LandingH1>I'm Cintia Nyerges</LandingH1> 
                <LandingT> <Typical loop={Infinity} steps={["Frontend Web Developer", 1000, "Webdesigner", 1000, "Enthusiastic Dev", 1000, "React Dev", 1000]} wrapper='b'/></LandingT> 
                <LandingP>with a passion for learning and creating</LandingP> 
                <LandingBtnWrapper>
                    {/* <Button1 to='project' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>My Projects {hover ? <ArrowForward /> : <ArrowRight />}</Button1> */}
                    <Button1 to='project' smooth={true} duration={500} spy={true} exact='true' offset={-80}>My Projects</Button1>
                    <Button2 to='cv' smooth={true} duration={500} spy={true} exact='true' offset={-80}>More details</Button2>
                </LandingBtnWrapper>
            </LeftSide>
            <RightSide>
                <PictureBg src="/static/media/svg-1.344c5a1ec4cfd5b50d3b5f6fab7af2eb.svg">                   
                </PictureBg>
            </RightSide>
        </LandingContent>
     </LandingContainer>

    </>
  )
}

export default LandingPage