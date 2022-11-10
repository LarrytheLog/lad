import React, {useEffect, useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import {registerWithEmailAndPassword, auth, signInWithGoogle} from '../firebase'


export default function Register() {
    async function handleSubmit(e){
        e.preventDefault()
        registerWithEmailAndPassword(nameRef.current.value, emailRef.current.value,passwordRef.current.value)
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
                <Button className='w-100 mt-2' type='submit'>Register</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        <p> Already Have An Account?</p> 
        <p> Or Sign In With: </p>
        <Button className = 'mt-2'onClick={()=>signInWithGoogle()}> <FontAwesomeIcon icon={faGoogle} /> </Button>
    </div>
    </>
    
  )
}

