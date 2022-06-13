import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const LandingContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    z-index:1;

`

export const LandingBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100vh;
    overflow:hidden;
`

export const VideoBg = styled.video`
    &{
    position:relative;
    width:100%;
    height:100vh;
    -o-object-fit:cover;
    object-fit:cover;
    background:#232a34;
    }

    &::before{
    content:'';
    position:absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    }
`

export const LandingContent=styled.div`
    z-index: 3;
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;

`
export const LandingH1=styled.h1`
    color: #fff;
    font-size:48px;
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const LandingP=styled.p`
    margin-top: 24px;
    color:#fff;
    font-size: 24px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }   

`

export const LandingBtnWrapper=styled.div`
    margin-top: 32px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const ArrowForward=styled(MdArrowForward)`
    margin-left: 8px;
    font-size:20px
`
export const ArrowRight=styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size:20px
`