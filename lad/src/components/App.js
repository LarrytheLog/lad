import React from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import { Container} from "react-bootstrap"
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom'

function App() {

  return (
    <Container className=" d-flex align-items-center justify-content-center"
    style= {{ minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth : "400px"}}>
      <Router>
        <Routes>
        <Route path ="/" element = { <Navigate to="/login"/>}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/register" element = {<Register />}></Route>
        <Route path = '/dashboard' element = {<Dashboard />}></Route>
        </Routes>
      </Router>
      </div>
    </Container>

  )
}

export default App;
