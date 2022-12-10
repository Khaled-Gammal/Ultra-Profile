import React from 'react'
import { Drop, DropForm, DropTitle, EmailBox, FormInput, MessageArea, NameBox, SendData, Span, SubInput } from './style'

function Contact() {
  return (
    <Drop>
      <div className='container'>
        <DropTitle><Span>Drop</Span> Me A Line</DropTitle>
        <DropForm>
          <FormInput>
            <NameBox type='text' placeholder='Your Name'></NameBox>
            <EmailBox type='email' placeholder='Your Email'></EmailBox>
          </FormInput>
          <SubInput type='text' placeholder='Your Subject'></SubInput>
          <MessageArea cols='30' rows='10' placeholder='Type Your Message'></MessageArea>
          <SendData type='submit' value='Send Message' ></SendData>
        </DropForm>
      </div>
    </Drop>
  )
}

export default Contact
