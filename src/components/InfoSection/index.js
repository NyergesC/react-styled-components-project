import React from 'react'
import {Button} from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Blob } from './InfoElements'

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
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                        <Blob><svg viewBox="150 0 900 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"  width="160%" id="blobSvg">
                        <g transform="translate(127, 34)">
                        <path  fill="#8a7394"><animate attributeName='d' dur='10000ms' repeatCount='indefinite' 
                        values='M413,309Q391,368,339,413.5Q287,459,226.5,427Q166,395,131,350.5Q96,306,71.5,241Q47,176,110,146.5Q173,117,229.5,82.5Q286,48,338.5,90Q391,132,413,191Q435,250,413,309Z; 
                        M406,307.5Q387,365,336,408Q285,451,228,418.5Q171,386,105.5,356.5Q40,327,61.5,258Q83,189,121.5,141Q160,93,221,81.5Q282,70,345.5,93.5Q409,117,417,183.5Q425,250,406,307.5Z; 
                        M415,310.5Q394,371,337.5,397.5Q281,424,204,443Q127,462,77,396.5Q27,331,48.5,258Q70,185,113.5,137.5Q157,90,218,89Q279,88,342,104Q405,120,420.5,185Q436,250,415,310.5Z;
                        M404,307Q386,364,334,398Q282,432,228,407Q174,382,114.5,351.5Q55,321,68,254.5Q81,188,106.5,117Q132,46,212,27.5Q292,9,365.5,50Q439,91,430.5,170.5Q422,250,404,307Z;
                        M417.5,309Q391,368,335.5,393.5Q280,419,212,426.5Q144,434,98.5,378Q53,322,81,260.5Q109,199,137.5,151.5Q166,104,222,98.5Q278,93,325.5,120Q373,147,408.5,198.5Q444,250,417.5,309Z;
                        M413,309Q391,368,339,413.5Q287,459,226.5,427Q166,395,131,350.5Q96,306,71.5,241Q47,176,110,146.5Q173,117,229.5,82.5Q286,48,338.5,90Q391,132,413,191Q435,250,413,309Z'></animate></path></g></svg></Blob>
                </Column2>
            </InfoRow>
        </InfoWrapper>

     </InfoContainer>


    </>
  )
}

export default InfoSection