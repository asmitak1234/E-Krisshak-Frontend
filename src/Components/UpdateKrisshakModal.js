// <!-- Made By - Asmita Kumari -->

import React from 'react';
import { Button ,Modal, Row ,Col , Form , FormControl, FormGroup, FormLabel} from "react-bootstrap";
import { updateKrisshak } from '../Services/KrisshakService';

export default function UpdateKrisshakModal(props){

    const handleSubmit = (e) => {
        e.preventDefault();
        updateKrisshak(props.krisshak.krisshakId, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Krisshak");
        })
    }

    return(

        <div className="container">
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered {...props}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Krisshak Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup controlId="FirstName">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl type="text" name="FirstName" required defaultValue={props.krisshak.FirstName} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="LastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl type="text" name="LastName" required defaultValue={props.krisshak.LastName} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="RegistrationNo">
                                        <FormLabel>Registration No.</FormLabel>
                                        <FormControl type="text" name="RegistrationNo" required defaultValue={props.krisshak.RegistrationNo} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="Email">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl type="text" name="Email" required defaultValue={props.krisshak.Email} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="Age">
                                        <FormLabel>Age</FormLabel>
                                        <FormControl type="number" name="Age" required defaultValue={props.krisshak.Age} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="Address">
                                        <FormLabel>Address</FormLabel>
                                        <FormControl type="text" name="Address" required defaultValue={props.krisshak.Address} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="Experience">
                                        <FormLabel>Experience</FormLabel>
                                        <FormControl type="number" name="Experience" required defaultValue={props.krisshak.Experience} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="MasteryGrow">
                                        <FormLabel>Mastery Grow in:</FormLabel>
                                        <FormControl type="text" name="MasteryGrow" required defaultValue={props.krisshak.MasteryGrow} placeholder="" />
                                </FormGroup>
                                <FormGroup controlId="HighestEducation">
                                        <FormLabel>Highest Education</FormLabel>
                                        <FormControl type="text" name="HighestEducation" required defaultValue={props.krisshak.HighestEducation} placeholder="" />
                                </FormGroup>
                                <FormGroup>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>

        </div>
    );
};

