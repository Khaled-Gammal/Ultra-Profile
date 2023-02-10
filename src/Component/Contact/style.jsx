import styled from "styled-components";


export const Drop=styled.div`
    position: relative;
    overflow: hidden;
    padding: 100px 0;
    text-align: center;
    background-image:url("../../images/contact.jpg");
    background-repeat:no-repeat;
    background-size: cover;
    background-attachment:fixed;
`
export const DropTitle=styled.h2`
    font-size:25px;
    font-weight: bold;
`
export const Span=styled.span`
    color:#FF1E1E
`
export const DropForm=styled.form`
    width: 70%;
    margin: auto;
`
export const FormInput=styled.div`
    width: 100%;
    padding: 10% 0;
    display: flex;
    justify-content: center;
    @media (max-width:575px) {
        padding: 10% 0;
        display:block;
    }
`
export const NameBox=styled.input`
    height: 20px;
    padding: 5px 10px;
    border-radius: 10px;
    margin-bottom: 5%;
    width: 30%;
    border:none;
    @media(max-width:575px){
        display: block;
        width:70%;
        margin: auto auto 5% ;
    }
`
export const EmailBox=styled(NameBox)`
    margin-left: 5%;
    @media(max-width:575px){
        margin-left:10% ;
    }
`
export const SubInput=styled(NameBox)`
    height: 50px;
    width: 60%;
    float:none;
    margin-right:auto;
    margin-left:auto;
    @media(max-width:575px){
        width: 80%;
        margin-bottom: 5%;
    }
`
export const MessageArea=styled.textarea`
    width: 60%;
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 5%;
    border-radius: 16px;
    padding: 5px 10px;
    border:none;
    @media(max-width:575px){
        width: 80%;
    }
`
export const SendData=styled.input`
    padding: 15px 20px;
    font-weight: 500;
    font-size: 20px;
    margin: 10% auto auto auto;
    border-radius: 10px;
    border:none;
    display: block;
    background-color: #FF1E1E;
    color:#fff
`