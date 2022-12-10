import styled from "styled-components";
export const ProfileSkills=styled.div`
    
    margin: 0;
    height: 400px;
    padding: 50px 10px;
    background-color: #BAD1C2;
    @media(max-width: 757px){
        height:fit-content;
    }
`
export const ProfileTitle=styled.h2`
    font-size: 30px;
    font-size: bold;
    color: #fff;
`
export const Span=styled.span`
    color:#4FA095;
`

export const ProfileList=styled.ul`
    list-style: none;
    margin-top: 3%;
    width: 45%;
    float: left;
    @media(max-width:757px){
        width: 80%;
        margin: auto;
        float: none;
    }
`
export const ProfileItem=styled.li`
    padding: 5px 10px;
    margin-bottom:1% ;
    height: 30px;
    font-weight: 500;
    
`
export const TitleName=styled.span`
    margin-right: 2%;
    padding: 5px;
    color: #4FA095;
    font-weight: bold;
`

export const Skills=styled.div`
    padding: 10px;
    width: 45%;
    float: right;
    @media(max-width:757px){
        width: 90%;
        margin: auto;
        float: none;
    }
`
export const SkillsTitle=styled.h2`
    font-size:20px;
    color:#fff
`
export const SkillsDesc=styled.p`
    text-align: center;
    padding: 5px;
    line-height: 1.5;
`
export const Bar=styled.div`
    padding: 5px;
    margin-bottom: 2%;
    background-color: #333;
    position: relative;
    height: 40px;
    color: #fff;
    border-radius: 10px;
    @media(max-width:757px){
        width: 100%;
        font-size: 12px;
    }
`
export const Title=styled.span`
    padding: 2px 5px;
    position: absolute;
    bottom: 10px;
    left: 5px;
    z-index: 4;
`
export const Parc=styled.span`
    position: absolute;
    right: 5px;
`
export const Parent=styled.div`
    background-color: #fff;
    height: 10px;
    width: 80%;
    margin-top: 20px;
    margin-left: 20%;
    border-radius: 5px;
    
`
export const Sp1=styled.span`
    background-color: #4FA095;
    position: absolute;
    width: 100%;
    height: 10px;
    &:first-of-type{
        width: 100%;
    }
    &:nth-of-type(2){
        width: 90%;
    }
    &:last-of-type{
        width: 70%;
    }
`
export const Clear=styled.div`
    clear: both;
    `