import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import { SocialApp, SocialIcon, SocialInfo, SocialMedial, SocialText } from './style'

function SocialMedia() {

  const[contacts,setContact]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/js/data.json')
    .then((res)=>{setContact(res.data.social)})
  },[])
  const SociaContact=contacts.map((contact)=>{
    return(
      <SocialApp key={contact.id}>
        <SocialIcon className={contact.icon}></SocialIcon>
        <SocialText>{contact.title}</SocialText>
        <SocialInfo>{contact.body}</SocialInfo>
      </SocialApp>
    )
    
  })
  return (
    <SocialMedial>
      {SociaContact}
    </SocialMedial>
  )
}

export default SocialMedia
