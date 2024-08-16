// <!-- Made By - Asmita Kumari -->

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Krisshaks from "./Components/Krisshaks";
import Manage from "./Components/Manage";
import Navigation from "./Components/Navigation";

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/krisshaks" element={<Krisshaks/>}/>
        <Route path="/manage" element={<Manage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}
