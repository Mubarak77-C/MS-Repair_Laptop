import React from 'react'
import { Carousel } from 'react-bootstrap'


const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./img/s1.jpg" 
            alt="First slide"
            height="300"
           
          />
          <Carousel.Caption>
            <h3>RV Laptop Care</h3>
            <p>We repair any Laptop and fix issue</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="./img/s2.jpg"
            alt="Third slide"
            height="300"
          />
          <Carousel.Caption>
          <h3>RV Laptop Care</h3>
            <p>We repair Computer any part fix and solve it</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/s3.jpg"
            alt="Third slide"
            height="300"
          />
          <Carousel.Caption>
          <h3>RV Laptop Care</h3>
            <p>We install software service also done</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slide
