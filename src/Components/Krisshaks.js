// <!-- Made By - Asmita Kumari -->

import {React,useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import {getKrisshaks} from '../Services/KrisshakService'
import '../App.css'

export default function Krisshaks(){
    const [krisshaks , setKrisshaks] =useState([]);
    
    useEffect(()=>{
        let mounted=true;
        getKrisshaks().then(data=>{
            if (mounted){
                setKrisshaks(data);
            }
        })
        return ()=>mounted=false;
    },[]);
    
    return(
        <div className='row side-row'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registraton Number</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Experience</th>
            <th>Mastery Grow in:</th>
            <th>Highest Education</th>
          </tr>
        </thead>
        <tbody>
            {krisshaks.map((kri)=>
                <tr key={kri.id}>
                    <td>{kri.krisshakId}</td>
                    <td>{kri.FirstName}</td>
                    <td>{kri.LastName}</td>
                    <td>{kri.RegistrationNo}</td>
                    <td>{kri.Email}</td>
                    <td>{kri.Address}</td>
                    <td>{kri.Age}</td>
                    <td>{kri.Experience}</td>
                    <td>{kri.MasteryGrow}</td>
                    <td>{kri.HighestEducation}</td>
                </tr>
            )}
        </tbody>
      </Table>
      </div>
    );
    
};