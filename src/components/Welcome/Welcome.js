import React from 'react'
import './Welcome.css';
import imageOne from '../../images/img-1.jpg';
const Welcome = () => {
  return (
    <>
     <div className='welcome-container'>
        <h1>Welcome to <br /> <span>Raj Global Studies</span></h1>
        <img src={imageOne} alt="" className='welcomeImg'/>
            <p className='welcome-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quo blanditiis. Ducimus odio facilis, nisi sed, ab saepe adipisci quo voluptatem, impedit nam quam. Aspernatur voluptates labore, accusamus, temporibus ut explicabo ullam porro inventore tenetur impedit libero non natus voluptatibus possimus totam mollitia! Possimus, quia facere enim delectus fuga libero!</p>
        </div>
    </>
  )
}

export default Welcome
