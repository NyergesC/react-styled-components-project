import styled from 'styled-components'

export const ProjectContainer = styled.div`
    height:800px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    text-align:center;
    align-center:center;
    backround: #ffffff;

    @media screen and (max-width: 768px){
        height: 1100px
    }
    @media screen and (max-width: 480px){
        height: 1300px
    }


`

export const ProjectWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
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

export const ProjectIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom:10px;


`


export const ProjectH1 = styled.h1`
    font=size: 2.5rem;
    color:#000000;
    margin-bottom: 64px;

    @media srceen and (max-width:480px){
        font-size: 2rem;
        margin-top: 10px;
    }

`

export const ProjectH2=styled.h2`
    font-size:1rem;
    margin-bottom:10px;


`

export const ProjectP = styled.p`
    font-size:1rem;
    text-align:center


`
export const ProjectH4 = styled.h4`
    font-size:0.9rem;
    text-align:center;
    margin-bottom: 10px;


`
export const GithubButton = styled.button`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:transparent;
    border: 3px solid #A2A2F6;
    color:#A2A2F6;
    border-radius: 20px;
    padding: 10px 20px;
    text-transform:uppercase;
    font-size: 0.9rem;
    font-weight:bolder;
    cursor:pointer;
    opacity:0;
    transform:translateY(30px)

    &:hover{
        color:#ffffff;
        border: 3px solid #ffffff;
        transition: all 0.2s ease-in-out;
        transform:translateY(0px)
    }
`
export const ProjectCard = styled.div`
    position:relative;
    background: #fff;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius: 10px;
    max-height:340px;
    height:100%;
    padding: 30px 50px;
    margin: 0 20px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
    transition: all 0.2s ease-in-out;

    &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        display:block;
        width:100%;
        height:100%;
        background:linear-gradient(to bottom, rgba(162,162,246,0.5), rgba(130,121,200,1));
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

        
    &:hover ${GithubButton}{
        opacity:1;
        transition: all 0.2 ease-in-out;
        color:#ffffff;
        border: 2px solid #ffffff;
        z-index:999
    }
    &:hover ${ProjectIcon}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }
    &:hover ${ProjectH2}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }
    &:hover ${ProjectH4}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }
    &:hover ${ProjectP}{
        opacity:.6;
        transition: all 0.2 ease-in-out;
    }


`
