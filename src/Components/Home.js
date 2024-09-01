// <!-- Made By - Asmita Kumari -->

import {React,useEffect,useState} from "react"
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../static/e-krisshak slide1.jpeg'
import slide2 from '../static/e-krisshak slide2.jpeg'
import slide3 from '../static/e-krisshak slide3.jpeg'
import '../App.css'
import api from '../Services/KrisshakService'

export default function Home() {

  const [username, setUsername] = useState("");

  useEffect(() => {
    getUser(); // Fetch user data on component mount
}, []);

const getUser = () => {
  api
      .get("/api/user/", {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}` // Ensure to include the token
          }
      })
      .then((res) => res.data)
      .then((data) => {
          setUsername(data.username);
      })
      .catch((err) => alert(err));
};


  return (
    <>
    <h3 className="text-center my-2">
                    Welcome, {username}! &#128522;
    </h3>
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
