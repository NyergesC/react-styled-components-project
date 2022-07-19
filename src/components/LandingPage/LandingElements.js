import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link} from 'react-scroll'

export const LandingContainer = styled.div`
    position:relative;
    background: #0c0c0c;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    z-index:1;


`
export const Blob = styled.div`
    position:absolute;
    max-width:600px;
    width:100%;
    height:600px;
    z-index:-1;

`

export const LandingBg = styled.div`
    background: #000;
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100vh;
    overflow:hidden;
`

export const LandingContent=styled.div`
    margin-top:80px;
    z-index: 3;
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    display:flex;
    align-items:center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display:grid;

    }


`
export const LandingH1=styled.h1`
    color: #fff;
    font-size:48px;
    text-align:left;

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
    text-align:left;
    max-width:600px;
    

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }   

`
export const LandingH=styled.p`
    color:#fff;
    font-size: 20px;
    text-align:left;
    max-width:600px;
    padding-bottom: 20px;
    

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
    }   

`

export const LandingT=styled.p`
    margin-top: 24px;
    color:#6C63FF;
    font-size: 24px;
    text-align:left;
    max-width:600px;
    

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }   

`

export const LandingBtnWrapper=styled.div`
    max-width:460px;
    width:100%;
    margin-top: 62px;
    display:flex;
${'' /*     flex-direction:column; */}
    align-items:center;
    justify-content:space-between;
`
export const ArrowForward=styled(MdArrowForward)`
    margin-left: 8px;
    font-size:20px
`
export const ArrowRight=styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size:20px
`

export const LeftSide=styled.div`
    max-width:600px;
    width:100%


`

export const RightSide=styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    max-width:600px;
    width:100%;

    @media screen and (max-width: 768px){
        max-width:400px;
        width:90%;
        margin-top: 40px;
        padding: 20px 20px;

    }


`
export const PictureBg=styled.img`
    width:100%;   


`
export const Button2 = styled(Link)`
    border-radius: 50px;
    background:#000;
    border: solid 2px #6C63FF;
    white-space: nowrap;
    padding: 10px 30px;
    color: #6C63FF;
    font-size: 20px;
    cursor:pointer;
    display:flex;
    justify-contenct:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        border:2px solid #8282cf;
        color:#8282cf;
    }

    @media screen and (max-width: 768px){
        font-size:16px;

    }
`

export const Button1 = styled(Link)`
    border-radius: 50px;
    background:#6C63FF;
    white-space: nowrap;
    padding: 10px 40px;
    color:#fff;
    font-size: 20px;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-contenct:center;
    align-items:center;
    margin: 0 20px 0 0;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#8282cf;
    }

    @media screen and (max-width: 768px){
        font-size:16px;

    }

`