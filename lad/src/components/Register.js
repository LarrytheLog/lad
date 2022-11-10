import React, {useEffect, useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import {registerWithEmailAndPassword, auth, signInWithGoogle} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


export default function Register() {
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const navigate = useNavigate();
    
    const [user]  = useAuthState(auth)

    useEffect(()=>{
        if (user) navigate("/dashboard") 
    })

    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfRef.current.value) {
            return setError("Passwords do not match")
          }

        try {
        setError("")
        setLoading(true)    
        await registerWithEmailAndPassword(nameRef.current.value, emailRef.current.value,passwordRef.current.value)
        } catch {
            setError("Failed to Register")
        }

        setLoading(false)
    }

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Register</h2>
            {error && <Alert variant= 'danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id ="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Form.Group id ="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id ="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id ="passwordConfirmation">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfRef} required />
                </Form.Group>
                <Button disabled = {loading} className='w-100 mt-2' type='submit'>Register</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        <p> Already Have An Account? <Link to='/login'>Sign In</Link></p> 
        <p> Or Sign In With: </p>
        <Button className = 'mt-2'onClick={()=>signInWithGoogle()}> <FontAwesomeIcon icon={faGoogle} /> </Button>
    </div>
    </>
    
  )
}

