import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg_01 from "../../assets/image/carousel/c1.jpg";
import CarouselImg_02 from "../../assets/image/carousel/c2.jpg";
import CarouselImg_03 from "../../assets/image/carousel/c3.jpg";

import "./home.css"
import { Image } from "react-bootstrap";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={CarouselImg_01} alt="First slide" />
        <Carousel.Caption>
          <h3>First Choice</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={CarouselImg_02} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Choice</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={CarouselImg_03} alt="Thirst slide" />
        <Carousel.Caption>
          <h3>Last Choice</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
