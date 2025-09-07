import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 carousel-image"
          src="/images/men_wear.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Men's Wear</h3>
          <p>Discover our exclusive men's collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 carousel-image"
          src="/images/aesthetic1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Trendy Looks</h3>
          <p>Elevate your style with our fashion wear.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 carousel-image"
          src="/images/women_wear.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Women's Wear</h3>
          <p>Designed to impress, exclusively for women.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 carousel-image"
          src="/images/autumn.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;