import styled from 'styled-components'

export const ContactContainer = styled.div`
    height:100vh;
    weight:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    text-align:center;
    align-center:center;
    background: #000000;

    @media screen and (max-width: 768px){
        height: 1100px
    }
    @media screen and (max-width: 480px){
        height: 1300px
    }


`

export const ContactWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns:1fr;
        padding: 0 20px;
    }
`

export const ContactIcon = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom:10px;


`


export const ContactH1 = styled.h1`
    color:#ffffff;
    margin-bottom: 84px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media srceen and (max-width:480px){
        font-size: 2rem;
        margin-top: 10px;
    }

`

export const ContactH2=styled.h2`
    font-size:1rem;
    margin-bottom:10px;
    margin-top:5px;


`

export const ContactP = styled.p`
    font-size:0.9rem;
    text-align:center


`
export const ContactH4 = styled.h4`
    text-align:center;
    color:#6C63FF;
    font-size: 16px;
    line-height: 16px;
    font-weight:700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;



`
export const SendButton = styled.a`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:transparent;
    color:#A2A2F6;
${'' /*     padding: 10px 20px; */}
    text-transform:uppercase;
    font-size: 2.5rem;
    font-weight:bolder;
    cursor:pointer;
    opacity:0;
    text-decoration:none;
    transform:translateY(30px)

    &:hover{
        color:#ffffff;
        transition: all 0.2s ease-in-out;
        transform:translateY(0px)
    }
`
export const ContactCard = styled.div`
    position:relative;
    background: #fff;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius: 10px;
    max-height:200px;
    height:100%;
    padding: 20px 50px;
    margin: 0 10px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
    transition: all 0.2s ease-in-out;

    &:before{
        content:'';
        position:absolute;
        border-radius:10px;
        top:0;
        left:0;
        display:block;
        width:100%;
        height:100%;
        background:linear-gradient(to bottom, rgba(162,162,246,0.5), rgb(108, 99, 255));
        z-index:999;
        transition: 0.5s all;
        opacity:0;
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer
    }
    &:hover:before{
        opacity:1;
    }

        
    &:hover ${SendButton}{
        opacity:1;
        transition: all 0.2 ease-in-out;
        color:#ffffff;
        z-index:999;

    }
    &:hover ${ContactIcon}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }
    &:hover ${ContactH2}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }
    &:hover ${ContactH4}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }
    &:hover ${ContactP}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }


`
