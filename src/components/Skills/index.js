import React from 'react'
import Icon1 from '../../images/svg-6.svg'
import {Button} from '../ButtonElements';
import {SkillContainer, SkillWrapper, Skillspan, SkillRow, Column1, TextWrapper, SkillH1, SkillH2, BtnWrap, Column2, ImgWrap, Img} from './SkillElements'

const Skill = ({primary, dark}) => {
    return (
        <>
         <SkillContainer id='skills'>
            <SkillWrapper>
                <SkillRow>
                    <Column1>
                        <TextWrapper>
                            <SkillH1>Skills</SkillH1>
                            <SkillH2>Front-End</SkillH2>
                            <Skillspan>ReactJS, HTML, CSS, SASS, Styled Components</Skillspan>
                            <SkillH2>Back-End</SkillH2>
                            <Skillspan>NodeJS, ExpressJS</Skillspan>
                            <SkillH2>Languages</SkillH2>
                            <Skillspan>Javascript</Skillspan>
                            <BtnWrap>
                                <Button to="project" smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={true} dark={true}                
                                >My Contact</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={Icon1} />
                        </ImgWrap>
                    </Column2>
                </SkillRow>
            </SkillWrapper>
    
         </SkillContainer>
         </>
  )
}
    

export default Skill