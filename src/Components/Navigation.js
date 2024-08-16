// <!-- Made By - Asmita Kumari -->

import React from "react"
import {Navbar} from "react-bootstrap"
import logo from "../static/e-krisshak app-logo.jpg"
import '../App.css'
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';
import { Link } from "react-router-dom";

export default function Navigation()
{
    return(
      <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="my-1">
          <Navbar.Brand href="/" className="app-logo">
            <img
              alt="E-Krisshak"
              src={logo}
              width="53"
              height="55"
              className="d-inline-block align-center"
            />{' '}
            <strong>E-Krisshak</strong>
            <span style={{position:'fixed',right:"20px"}}>Asmita Kumari</span>
          </Navbar.Brand>
        </Navbar>

      <div className="sidebar">
      <CDBSidebar backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to='/' activeclassname='activeClicked'>
            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
          </Link>
          <Link to='/krisshaks' activeclassname='activeClicked'>
            <CDBSidebarMenuItem icon="list">E-Krisshak List</CDBSidebarMenuItem>
          </Link>
          <Link to='/manage' activeclassname='activeClicked'>  
            <CDBSidebarMenuItem icon="user" iconType="solid">Manage Krisshaks
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      </CDBSidebar>
      </div>
      </>
    );
}