import React, { useState } from 'react'
import { Form, Button, Modal, CloseButton } from 'react-bootstrap';
import './Login.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Login(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ backgroundColor: 'orange' }} onClick={handleShow}>Login as {props.name}</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                

                <Modal.Body className='regimodal'>
                    <div id='login' className='App'>

                        <Form>
                            <CloseButton onClick={handleClose}/>
                            <h1 id='login-head'> Login</h1><br />
                            <pre>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='label'><b>Phone No  </b></Form.Label>
                                        <Form.Control type="tel" placeholder="Enter your phone number" />
                                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                                    </Form.Group>
                                </div>

                            </pre>
                            <pre>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='label'><b>Password  </b></Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </div>
                            </pre>
                            <div>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>

                            <pre><br />
                                <div>
                                    <p className='label'> New User ?</p>
                                    <Link to='#'>Register Me</Link>
                                </div>
                            </pre>

                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Login