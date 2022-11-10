import React, {useEffect, useRef} from 'react'
// import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
//import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

import {Form, Button, Card} from 'react-bootstrap'
export default function Login() {
    // const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();
    // useEffect(() => {
    //   if (loading) {
    //     // maybe trigger a loading screen
    //     return;
    //   }
    //   if (user) navigate("/dashboard");
    // }, [user, loading]);    


    const emailRef = useRef();
    const passwordRef = useRef();
  return (
  <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Login</h2>
            <Form>
                <Form.Group id ="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id ="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className='w-100 mt-2' type = "submit" onClick={()=>logInWithEmailAndPassword(emailRef,passwordRef)}>Login</Button>
            </Form>
        </Card.Body>
    </Card>

    <div className='w-100 text-center mt-2'>
        <p> Don't Have An Account? Sign Up </p>
        <p> Or Sign In With: </p>
        <Button className = 'mt-2'onClick={()=>signInWithGoogle()}> <FontAwesomeIcon icon={faGoogle} /> </Button>
    </div>
    </>
  )
}

