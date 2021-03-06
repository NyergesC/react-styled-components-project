import styled from 'styled-components'

export const SkillContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#fff')};

    @media srceen and (max-width: 768px){
        padding: 100px 0;
    }

`
export const SkillWrapper = styled.div`
    display:grid;
    z-index:1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const SkillRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }

`


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`
export const SkillH1 = styled.h1`
    margin-bottom: 34px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;

    
    @media screen and (max-width: 768px){
        margin-top: 14px;

    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
  
 `
 export const SkillH2 = styled.h2`
    max-width:440px;
    margin-bottom: 35px;
    font-size:22px;
    line-height:24px;
    color: #000;

`
 export const Skillspan = styled.p`
    max-width:440px;
    margin-bottom: 35px;
    font-size:18px;
    line-height:24px;
    color: #000;

`

export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 768px){
        max-width:400px;
        width:90%;
        padding: 0 20px;

    }

`

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
