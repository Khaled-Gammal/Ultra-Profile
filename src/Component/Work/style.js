import styled from "styled-components";

export const WorkSection=styled.div`
    padding: 20px 10px;
    width: 100%;
    height: 500px;
    position: relative;
`
export const WorkTitle=styled.h4`
    font-size: 30px;
    font-weight: bold;
`
export const Span=styled.span`
color: #4FA095;
`
export const FirstCard=styled.div`
    margin-top: 20px;
    width: calc(100% / 3 - 8%);
    border-radius: 16px;
    text-align: center;
    border: 1px solid gray;
    padding: 20px;
    float: left;
    margin: auto;
    margin-left: 5%;
    &:first-of-type{
        margin-left: 0;
    }
    @media(max-width:575px){
        display: block;
        width: 85%;
        margin: auto;
        margin-bottom: 20px;
    }
`
export const Icon=styled.i`
    padding-top:50px;
    margin-bottom: 20px;
    &:hover{
        color: #4FA095;
    }
`
export const CardTitle=styled.h4`
    padding: 5px;
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    &:hover{
        color: #4FA095;
    }
`
export const Line=styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
`
export const CardDesc=styled.p`
    color: grey;
    line-height: 1.5;
    &:hover{
        color: #333;
    }
`