import React,{useState,useEffect} from 'react'
import { Bar, Clear, Parc, Parent, ProfileItem, ProfileList, ProfileSkills, ProfileTitle, Skills, SkillsDesc, SkillsTitle, Sp1, Span, Title,TitleName } from './style'
import axios from 'axios'
function Profile() {
  const[skills,setSkills]=useState([]);
  useEffect(()=>{
    axios.get('js/data.json').then((res)=>{setSkills(res.data.profile)})
  },[])
  const mySkills=skills.map((skill)=>{
    return(
    <Bar key={skill.id}>
            <Title>{skill.title}</Title>
            <Parc>{skill.percentage}</Parc>
            <Parent>
              <Sp1></Sp1>
            </Parent>
          </Bar>
    )
  })
  return (
    <ProfileSkills>
      <div className='container'>
        <ProfileTitle><Span>My</Span>Profile</ProfileTitle>
        <ProfileList>
          <ProfileItem>
            <TitleName>Name</TitleName>
            Khaled Gamal
          </ProfileItem>
          <ProfileItem>
            <TitleName>Birthday</TitleName>
             1/1/1997
          </ProfileItem>
          <ProfileItem>
            <TitleName>Address</TitleName>
            6Th of October,Giza
          </ProfileItem>
          <ProfileItem>
            <TitleName>Email</TitleName>
            Khaledgammal7@gmail.com
          </ProfileItem>
          <ProfileItem>
            <TitleName>Phone</TitleName>
            +201127875656
          </ProfileItem>
          <ProfileItem>
            <TitleName>Website</TitleName>
            www.google.com
          </ProfileItem>
        </ProfileList>
        <Skills>
          <SkillsTitle><Span>Some</Span> Skills</SkillsTitle>
          <SkillsDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</SkillsDesc>
          <Clear></Clear>
          {mySkills}
        </Skills>
      </div>
    </ProfileSkills>
  )
}

export default Profile
