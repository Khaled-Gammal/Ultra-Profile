import styled from "styled-components";

export const PortfolioSection=styled.div`
    width: 100%;
    position: relative;

`
export const PortfolioTitle=styled.h2`
    font-size: 30px;
    font-weight: bold;
   
`
export const Span=styled.span`
    color: #4FA095;
`
export const PortfolioList=styled.ul`
    list-style: none;
    margin-left: 22%;
    @media(max-width:575px){
        margin-left:-9%;
        width: 100%;
    }

`
export const PortfolioItem=styled.li`
    display: inline-block;
    text-align: center;
    background-color: #BAD1C2;
    color: #fff;
    border-radius:10px;
    padding: 10px 20px; 
    margin-left: 3%;
    &:first-of-type{
        margin-left: 0;
        background-color: #4FA095;
    }
    @media(max-width:575px){
        font-size: 14px;
        margin-left: 1%;
        padding: 5px 10px;
        color: #fff;
    }
    
`
export const Albums=styled.div`
    width: 100%;
    position: relative;
`
export const AlbumBox=styled.div`
    position: relative;
    display:inline-block;
    margin-left: 1%;
    margin-bottom: 1%;
    width: calc( 97% / 4 );
    scale: initial;
    &:first-of-type{
        margin-left: 0;
    }
    &:nth-of-type(5){
        margin-left: 0;
    }
    @media(max-width:575px){
        width: 90%;
        margin:2% 5%;
        &:nth-of-type(5){
        margin:2% 5%;
    } &:first-of-type{
        margin:2% 5%;
    }
    }
`
export const Image=styled.img`
    width: 100%;
`
export const OverLay=styled.div`
    width:100%;
    height: 99%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    &:hover{
        background-color: rgb(0,0,0,0.5);
    }
`
export const ImageTitle=styled.span`
    z-index: 3;
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 10px 15px;
    border-radius: 10px;
    text-align: center;
    color: transparent;
    &:hover{
    color: #FFF;
    background-color:#4FA095
    }
   
`