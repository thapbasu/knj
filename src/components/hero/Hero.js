import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Hero.css";
import imageOne from '../../images/img-1.jpg';
import imageTwo from '../../images/img-2.jpg'
import imageThree from '../../images/img-3.jpg'
import imageFour from '../../images/img-4.jpg'

const Hero = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay>
        
        <div className="image">
            <p className='img-description'>Full Counseling</p>
            <img src = {imageOne} alt = 'hello' />
        </div>
        <div className="image">
        <p className='img-description'>Study in Japan</p>
            <img src = {imageTwo} alt = 'hello' />
        </div>
        <div className="image">
        <p className='img-description'>High Visa Success Rate</p>
            <img src = {imageThree} alt = 'hello' />
        </div>
        <div className="image">
        <p className='img-description'>Offices in major cities of Nepal</p>
            <img src = {imageFour} alt = 'hello' />
        </div>
      </Carousel>
    </div>
  )
}

export default Hero
