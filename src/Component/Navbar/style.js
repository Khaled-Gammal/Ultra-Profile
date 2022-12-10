import {Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarSection=styled.div`
    padding: 10px 0;
    position: absolute;
    z-index: 2;
    overflow: hidden;
    background-color: transparent;
    width: 100%;
`

export const Logo=styled.div`
    float: left;
`
export const LogoText =styled.h2`
    font-size: 20px;
    cursor: pointer;
    color: #fff;
`
export const Span =styled.span`
    font-size: 30px;
    cursor: pointer;
    color: #4FA095;
`
export const List=styled.ul`
    list-style: none;
    float: right;
    @media(max-width:575px){
        width:100%;
        position: fixed;
        top: 2%;
        left: -9%;
        z-index: 5;

    }
`
export const ListNav=styled.ul`
    list-style: none;
    float: right;
    @media(max-width:575px){
       display: none;

    }
`
export const ListItem=styled.li`
    display: inline-block;
    cursor: pointer;
    @media(max-width:575px){
         display: block;
         background-color: rgb(0,0,0,0.6);
         padding: 2px 5px;
         border-bottom: 1px solid gray;
         color: #FFF;
    }
`
export const Anchor=styled.a`
    text-decoration:none;
    font-weight: 500;
    font-size: 17px;
    display: block;
    padding: 10px 15px;
    &:hover{
        color: #4fa095;
    }
`
export const NavLink=styled(Link)`
    text-decoration:none;
    font-size: 17px;
    font-weight: 500;
    display: block;
    color: black;
    padding: 10px 15px;
    &:hover{
        color:#4fa095;
    }
    @media (max-width:575px){
        color: #fff;
    }
    
`
export const Menu=styled.button`
    padding: 3px 5px;
    display: none;
    background-color: transparent;
    border: none;
    @media(max-width:757px){
        display: block;
        right: 5%;
        top: 7%;
        float: right;
        position: fixed;
        z-index: 5;
    }
`