import React,{useState,useEffect} from 'react';
import { AlbumBox, Albums, Image, ImageTitle, OverLay, PortfolioItem, PortfolioList,
  PortfolioSection, PortfolioTitle, Span } from './style';
import axios from 'axios';

function Portfolio() {

  const [Photos,setPhotos]=useState([]);

  useEffect(() => {
    axios.get(`js/data.json`)
    .then((res)=> {setPhotos(res.data.portfolio)})
  },[])

  const ImagesAlbum=Photos.map((photo)=>{
    return(
      <AlbumBox key={photo.id}>
        <Image src={photo.image}></Image>
        <OverLay>
          <ImageTitle>Show Image</ImageTitle>
        </OverLay>
      </AlbumBox>
    )
  })

  return (
    <PortfolioSection>
      <div className='container'>
        <PortfolioTitle> <Span>My</Span>Portfolio </PortfolioTitle>
        <PortfolioList>
          <PortfolioItem>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>WordPress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        </div>
        <Albums>
          {ImagesAlbum}
        </Albums>
    </PortfolioSection>

  )
}

export default Portfolio
