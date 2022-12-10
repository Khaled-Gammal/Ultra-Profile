import React,{useState} from 'react'
import { Anchor, List, ListItem, ListNav, Logo ,LogoText,Menu,NavbarSection,NavLink, Span} from './style.js'


function Navbar() {

  const[open,setOpen]=useState(false);
  const toggleBtn=()=>{
    setOpen(!open);
  }
  

  return (
    <NavbarSection>
      <div className='container'>
        <Logo>
          <LogoText><Span>Ultra</Span> Profile</LogoText>
        </Logo>
        
        <ListNav className='ListNav' >
          <ListItem><NavLink to="/">Home</NavLink></ListItem>
          <ListItem><Anchor to="#">Work</Anchor></ListItem>
          <ListItem><Anchor to="#">Portfolio</Anchor></ListItem>
          <ListItem><Anchor to="#">Resume</Anchor></ListItem>
          <ListItem><Anchor to="#">About</Anchor></ListItem>
          <ListItem><NavLink to="/contact">Contact</NavLink></ListItem>
        </ListNav>
        { open?
        <List className='ListMenu'>
          <ListItem><NavLink to="/">Home</NavLink></ListItem>
          <ListItem><Anchor to="#">Work</Anchor></ListItem>
          <ListItem><Anchor to="#">Portfolio</Anchor></ListItem>
          <ListItem><Anchor to="#">Resume</Anchor></ListItem>
          <ListItem><Anchor to="#">About</Anchor></ListItem>
          <ListItem><NavLink to="/contact">Contact</NavLink></ListItem>
        </List>:null}
        <Menu onClick={toggleBtn}><i className="fa-solid fa-bars fa-xl"></i></Menu>
        
      </div>
    </NavbarSection>
  )
}

export default Navbar;
