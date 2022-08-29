import React, { useState } from 'react';
import { Button, Stack, Container, Modal, Form, Alert } from 'react-bootstrap';
import { useNavigate, Navigate, useLocation, Link } from 'react-router-dom'
import { UserAuth } from '../AuthContext.js';

export default function LogInModal(props) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { signIn, resetPassword, user } = UserAuth()


  const handleSubmit = async (e) => {
    console.log("handle submit")
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (error) {
      setError(error.message)
      alert(error.message)
      console.error(error)
    }
  }

  const forgotPassword = async () => {
    try {
      console.log("in forgotPassword function")
      await resetPassword(email)
    } catch (error) {
      setError(error.message)
      alert(error.message)
      console.error(error)
    }
  }


  return (
    <Modal
      size="lg"
      show={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Log In
        </Modal.Title>
      </Modal.Header>
      <Form className="login" onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <p style={{ fontSize: 12, marginBottom: 5 }}>Can't remember password?</p>
          <Link to="/resetpassword">
            <Button size="sm" variant="outline-primary" onClick={() => { forgotPassword(email) }} >Forgot Password</Button>
          </Link>
          <p style={{ fontSize: 12, marginTop: 12, marginBottom: 5 }}>Don't have an account?</p>
          <Button size="sm" variant="outline-primary" onClick={() => { navigate('/signup') }}>Sign Up</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Form>

    </Modal>
  );
}