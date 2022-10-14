import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Home from '../home/Home'
import Academics from '../academics/Academics'
function NavigationBar() {
    return (
        <>
        <Router>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand>NUS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to = {"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to = {"/academics"}>Academics</Nav.Link>
                        <Nav.Link as={Link} to = {"/admission"}>Admission</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/academics" element={<Academics/>}>
                </Route>
                <Route path="/admission" element={<Academics/>}>
                </Route>
            </Routes>
        </Router>
        </>
    );
  }
  
  export default NavigationBar;