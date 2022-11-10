import React, {useEffect, useRef, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

import {Form, Button, Card, Alert} from 'react-bootstrap'


export default function Login() {
     const [user] = useAuthState(auth);
     const [error, setError] = useState()
     const [loading, setLoading] = useState()
     const navigate = useNavigate()

     useEffect(()=>
        {
            if (user) navigate("/dashboard")
        },[user]
     )

    async function handleSubmit(e){
        e.preventDefault()
        try {
            setError("")
            setLoading(true)    
            await logInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
            } catch {
                setError("Failed to Login")
            }
    
            setLoading(false)
    }

    const emailRef = useRef();
    const passwordRef = useRef();
  return (
  <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Login</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id ="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id ="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className='w-100 mt-2' disabled={loading} type = "submit">Login</Button>
            </Form>
        </Card.Body>
    </Card>

    <div className='w-100 text-center mt-2'>
        <p> Don't Have An Account? <Link to="/register">Sign Up</Link></p> 
        <p> Or Sign In With: </p>
        <Button className = 'mt-2' onClick={()=>signInWithGoogle()} > <FontAwesomeIcon icon={faGoogle} /> </Button>
    </div>
    </>
  )
}

