import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../firebase'

function Dashboard() {
  const user = auth.currentUser
    return (
    <>

        <h1>Hello {user.displayName} </h1>
    
    </>
  )
}

export default Dashboard