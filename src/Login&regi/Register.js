import React, { useState } from 'react';
import { Form, Button, CloseButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './Register.css'


function Register(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button style={{ backgroundColor: 'orange' }} onClick={handleShow}>SignUp as {props.name}</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >

                <Modal.Body className='regimodal'>
                    <div id='register' className='App'>

                        <Form>
                        <CloseButton onClick={handleClose} className='closeBtn'/>
                            <h1 id='register-head'> Register</h1><br />

                            <pre>
                                <div>
                                    <Form.Group className="" >
                                        <Form.Label className='label'><b>Fullname  </b></Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" style={{ width: '250px', opacity: '0.5' }} />
                                    </Form.Group>
                                </div>
                            </pre>
                            <pre>
                                <div>
                                    <Form.Group className="" >
                                        <Form.Label className='label'><b>Email</b></Form.Label>
                                        <Form.Control type="email" placeholder="Email" style={{ width: '250px', opacity: '0.5' }} />
                                    </Form.Group>
                                </div>
                            </pre>

                            <pre>
                                <div>
                                    <Form.Group className="" controlId="formBasicPassword">
                                        <Form.Label className='label' row='4' col='60'><b>Address  </b></Form.Label>
                                        <textarea placeholder='write your address' style={{ width: '250px', opacity: '0.5' }} />
                                    </Form.Group>
                                </div>
                            </pre>
                            <pre>
                                <div>
                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label className='label'><b>Phone No  </b></Form.Label>
                                        <Form.Control type="tel" placeholder="Enter your phone number" style={{ width: '250px', opacity: '0.5' }} />
                                        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text> */}
                                    </Form.Group>
                                </div>

                            </pre>
                            <pre>
                                <div>
                                    <Form.Group className="" controlId="formBasicPassword">
                                        <Form.Label className='label'><b>Password  </b></Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '250px', opacity: '0.5' }} />
                                    </Form.Group>
                                </div>
                            </pre>

                            <div>
                                <Button type="submit" onClick={handleClose}>
                                    Register
                                </Button><br/>
                            </div>
                                <p> Already a User <Link to='#'>LogIn</Link></p>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    )
}

export default Register