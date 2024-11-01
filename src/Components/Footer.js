// <!-- Made By - Asmita Kumari -->

import React from "react"
import '../App.css'
import logo from "../static/e-krisshak app-logo.jpg"

import { CDBModalFooter,CDBBox} from 'cdbreact';

export default function Footer(){
  return (
    <CDBModalFooter className="shadow px-4" style={{ height:"15vh", borderRadius:"10px",
      position: "relative",
      marginTop:"40vh",
      bottom: 0,
      left: "40vw",
      width:"70%",
      transform: "translateX(-50%)",
      zIndex:1000,
      }} >
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-1 px-2 flex-wrap"
      >
        <CDBBox display="flex" alignItems="center">
          <div className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="35px"
              height="45px"
            />
            {/* <span className="ms-4 h5 mb-0 font-weight-bold"></span> */}
          </div>
          <strong style={{fontSize:'23px'}} className="mx-1">E-Krisshak</strong>
          <p className="mx-2 my-2"> by Asmita Kumari</p>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};
