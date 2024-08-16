// <!-- Made By - Asmita Kumari -->

import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../static/e-krisshak slide1.jpeg'
import slide2 from '../static/e-krisshak slide2.jpeg'
import slide3 from '../static/e-krisshak slide3.jpeg'
import '../App.css'

export default function Home() {
  return (
    <>
    <div className='row slides'>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
            className="d-block"
            src={slide1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            src={slide2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            src={slide3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    </div>
    </>
  );
}
