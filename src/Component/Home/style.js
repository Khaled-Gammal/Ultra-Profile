import styled from "styled-components";

export const HomeSection=styled.div`
    background-image:url('images/contactUs.jpg');
    background-size: cover;
    height: 100vh;
    text-align: center;
    position:relative;
    width: 100%;
`
export const HomeInformation=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media(max-width:575px){
        top:60%
    }
`
export const HomeTiltle=styled.h2`
    font-size:50px;
    font-weight: bold;
    color: #153462;
    @media(max-width:575px){
        font-size: 25px;
    }
`
export const HomeInfo=styled.h4`
    margin-bottom: 20px;
    font-size: 35px;
    color: #4FA095;
    @media(max-width:575px){
        font-size: 20px;
        margin-bottom: 10px;

    }
`
export const HomeDesc=styled.p`
    line-height: 1.5;
    font-size: 20px;
    margin-bottom: 20px;
    color: #333;
    @media(max-width:575px){
        font-size: 18px;
        margin-bottom: 10px;
    }
`
export const Span=styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #4FA095;
`
export const HomeBtn=styled.button`
    padding: 20px 30px;
    font-size:20px;
    font-weight: 550;
    border:none;
    border-radius: 20px;
    &:hover{
        background-color: #4FA095;
        transition: 1s all;
        outline: 2px solid #fff;
        color: #fff;
    }
`