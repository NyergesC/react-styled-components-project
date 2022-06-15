import React from 'react'
import {Button} from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darjText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="project" smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={primary ? 1: 0}
                            dark={dark ? 1: 0}
                            dark2={dark2 ? 1: 0}
                            
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={"/static/media/svg-1.344c5a1ec4cfd5b50d3b5f6fab7af2eb.svg"} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>

     </InfoContainer>


    </>
  )
}

export default InfoSection