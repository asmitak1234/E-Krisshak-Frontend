// <!-- Made By - Asmita Kumari -->

import React from "react"
import '../App.css'
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBIcon,
} from 'cdbreact';
import { Link } from "react-router-dom";

export default function SideBar()
{
    return(

        <div className="sidebar">
        <CDBSidebar backgroundColor="#333"className="collapsed" toggled>
        <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
        <CDBSidebarMenu>
            <Link to='/' activeclassname='activeClicked'>
            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </Link>
            <Link to='/krisshaks' activeclassname='activeClicked'>
            <CDBSidebarMenuItem icon="list">List</CDBSidebarMenuItem>
            </Link>
            <Link to='/manage' activeclassname='activeClicked'>  
            <CDBSidebarMenuItem icon="user" iconType="solid">Manage
            </CDBSidebarMenuItem>
            </Link>
        </CDBSidebarMenu>
        </CDBSidebarContent>
        </CDBSidebar>
        </div> 
    );
}

