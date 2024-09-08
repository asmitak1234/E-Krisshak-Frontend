// <!-- Made By - Asmita Kumari -->

import React from "react"
import {Navbar,Container} from "react-bootstrap"
import logo from "../static/e-krisshak app-logo.jpg"
import '../App.css'

export default function Navigation({ formContent })
{
    return(
      <>
        <Navbar className="mb-2" expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" className="app-logo">
              <img
                alt="E-Krisshak"    
                src={logo}
                width="53"
                height="55"
                className="d-inline-block align-middle"
              />{' '}
              <strong className="mx-1">E-Krisshak</strong>
              {/* <span style={{position:'fixed', right:"4px", top:"40px", fontSize:"8px",}}>Asmita Kumari</span> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Navbar.Text>
                          <form className="my-2 d-inline" style={{display:"inline",}} onSubmit={e => formContent.onSubmit(e)}>
                              {formContent.content}
                          </form>
                      </Navbar.Text>
                  </Navbar.Collapse>
          </Container>
        </Navbar>


      {/* <div className="sidebar">
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
      </div> */}
      </>
    );
}