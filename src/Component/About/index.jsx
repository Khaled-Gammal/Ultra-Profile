import React from 'react'
import { Creative, CreativeInfo, CreativeTitle, InfoDir, InfoDisc, Span } from './style'

function About() {
  return (
    <Creative>
      <div className='container'>
        <CreativeInfo>
          <CreativeTitle><Span>This is</Span> Me</CreativeTitle>

          <InfoDir>Creative Director</InfoDir>

          <InfoDisc>New layout methods such as Flexbox and Grid bring with them
             the possibility of controlling the order of content.</InfoDisc>

          <InfoDisc>In this article, we will take a look at ways in which you can change the visual order of 
            your content when using Flexbox.
             We will also consider the implications of reordering items
             from an accessibility point of view.</InfoDisc>
        </CreativeInfo>
      </div>
    </Creative>
  )
}

export default About
