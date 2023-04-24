import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/111.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/222.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/333.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider