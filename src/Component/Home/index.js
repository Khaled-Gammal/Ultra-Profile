import React from 'react'
import { HomeBtn, HomeDesc, HomeInfo, HomeInformation, HomeSection, HomeTiltle, Span} from './style.js'
function Home() {
  return (
    <HomeSection>
      <div className='container'>
        <HomeInformation>
          <HomeTiltle>Khaled Gammal</HomeTiltle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>I am a Professional <Span>Ui Designer </Span>
          and Front-End Developer creating modern and responsive designs tp web and mobile.
            Let us work together. Thank you.  </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  )
}

export default Home
