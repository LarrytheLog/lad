import React, {useEffect, useRef} from 'react'
import { Link } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

import {Form, Button, Card} from 'react-bootstrap'


export default function Login() {
     const [user, loading, error] = useAuthState(auth);
    // useEffect(() => {
    //   if (loading) {
    //     // maybe trigger a loading screen
    //     return;
    //   }
    //   if (user) navigate("/dashboard");
    // }, [user, loading]);    
    async function handleSubmit(e){
        e.preventDefault()
        logInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    }

    const emailRef = useRef();
    const passwordRef = useRef();
  return (
  <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id ="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id ="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className='w-100 mt-2' type = "submit">Login</Button>
            </Form>
        </Card.Body>
    </Card>

    <div className='w-100 text-center mt-2'>
        <p> Don't Have An Account? <Link to="/register">Sign Up</Link></p> 
        <p> Or Sign In With: </p>
        <Button className = 'mt-2' > <FontAwesomeIcon icon={faGoogle} /> </Button>
    </div>
    </>
  )
}

