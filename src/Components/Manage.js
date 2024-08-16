// <!-- Made By - Asmita Kumari -->

import {React, useState,useEffect} from 'react'
import {Table,Button,ButtonToolbar} from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { getKrisshaks,deleteKrisshak } from '../Services/KrisshakService'
import '../App.css'
import AddKrisshakModal from './AddKrisshakModal'
import UpdateKrisshakModal from "./UpdateKrisshakModal"

export default function Manage(){
    const [krisshaks , setKrisshaks] =useState([]);
    const [addModalShow , setAddModalShow] =useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editKrisshak, setEditKrisshak] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(()=>{
        let mounted=true;
        if(krisshaks.length && !isUpdated) {
            return;
            }
            getKrisshaks()
            .then(data => {
              if(mounted) {
                setKrisshaks(data);
              }
            })
          return () => {
             mounted = false;
             setIsUpdated(false);
          }
        }, [isUpdated, krisshaks])
   
       const handleUpdate = (e, kri) => {
           e.preventDefault();
           setEditModalShow(true);
           setEditKrisshak(kri);
       };
   
       const handleAdd = (e) => {
           e.preventDefault();
           setAddModalShow(true);
       };
   
       const handleDelete = (e, krisshakId) => {
           if(window.confirm('Are you sure ?')){
               e.preventDefault();
               deleteKrisshak(krisshakId)
               .then((result)=>{
                   alert(result);
                   setIsUpdated(true);
               },
               (error)=>{
                   alert("Failed to Delete Krisshak");
               })
           }
       };

       let AddModalClose=()=>setAddModalShow(false);
       let EditModalClose=()=>setEditModalShow(false);
   
    return(
        <div className='row side-row my-4'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registration Number</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Experience</th>
            <th>Mastery Grow in:</th>
            <th>Highest Education</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {krisshaks.map(kri=>
                <tr key={kri.krisshakId}>
                    <td>{kri.krisshakId}</td>
                    <td>{kri.FirstName}</td>
                    <td>{kri.LastName}</td>
                    <td>{kri.RegistrationNo}</td>
                    <td>{kri.Email}</td>
                    <td>{kri.Age}</td>
                    <td>{kri.Address}</td>
                    <td>{kri.Experience}</td>
                    <td>{kri.MasteryGrow}</td>
                    <td>{kri.HighestEducation}</td>
                    <td>
                        <Button className='mr-2 my-1' variant='danger'
                         onClick={event => handleDelete(event,kri.krisshakId)}><RiDeleteBin5Line/>
                        </Button>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <Button className="mr-2 my-1"
                         onClick={event => handleUpdate(event,kri)}><FaEdit/>
                        </Button>
                        <UpdateKrisshakModal show={editModalShow} krisshak={editKrisshak} setUpdated={setIsUpdated} onHide={EditModalClose}>
                        </UpdateKrisshakModal>
                    </td>
                </tr>
            )}
        </tbody>
      </Table>

           <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>Add Krisshak</Button>
                <AddKrisshakModal show={addModalShow} setUpdated={setIsUpdated} onHide={AddModalClose}></AddKrisshakModal>
            </ButtonToolbar>
      </div>
    );
    
};