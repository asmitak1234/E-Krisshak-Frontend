// <!-- Made By - Asmita Kumari -->

import React from "react"
import '../App.css'
import logo from "../static/e-krisshak app-logo.jpg"

import { CDBModalFooter,CDBBox} from 'cdbreact';

export default function Footer(){
  return (
    <CDBModalFooter className="shadow px-4">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 px-4 flex-wrap"
        style={{ width: '70%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="50px"
            />
            <span className="ms-4 h5 mb-0 font-weight-bold"></span>
          </a>
          <strong style={{fontSize:'23px'}} className="ms-1">E-Krisshak</strong>
          <p className="mx-5 my-4"> by Asmita Kumari</p>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};