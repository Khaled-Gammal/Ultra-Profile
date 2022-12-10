import styled from "styled-components";
export const SocialMedial=styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    @media(max-width:575px){
        display: block;
        width: 100%;
    }

`
export const SocialApp=styled.div`
    width: calc(100% / 3);
    text-align: center;
    padding-top:10% ;
    padding-bottom: 5%;
    &:first-of-type{
        background-color: #083AA9;
        color: #fff;
    }
    &:nth-of-type(2){
        background-color: #5F9DF7;
        color: #fff;
    }
    &:last-of-type{
        background-color:#E14D2A;
        color:#fff
    }
    @media(max-width:575px){
        display: block;
        width: 100%;
    }
`
export const SocialIcon=styled.i`
    padding: 10px 5px;
`
export const SocialText=styled.p`
    letter-spacing: 2px;
    font-weight: 500;
`
export const SocialInfo=styled.p`
    letter-spacing: 2px;
    font-weight: 500;
`