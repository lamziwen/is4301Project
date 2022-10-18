import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, logout, db } from "./service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";

import Home from '../home/Home'
import Academics from '../academics/Academics'
import Admission from '../admission/Admission'
import LoginModal from '../common/LoginModal'
import './NavigationBar.css';
import RegisterModal from '../common/RegisterModal';

function NavigationBar() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [show2, setShow2] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    var title
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    function showModal(event){
        console.log(event.currentTarget.id)
        
        if (event.currentTarget.id == "loginButton"){
            setShow(true)
        } else if (event.currentTarget.id == "registerButton") {
            setShow2(true)
        }
    }

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            console.log(user)
            return;
        }
        if (user) {
            navigate("/");
            fetchUserName();
        }
    }, [user, loading]);
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand>NUS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/academics"}>Academics</Nav.Link>
                        <Nav.Link as={Link} to={"/admission"}>Admission</Nav.Link>
                    </Nav>
                    <div className=''>
                        {!user ? (
                            <div>
                                <button onClick={showModal} id = "loginButton">
                                    Login
                                </button>
                                &nbsp;
                                &nbsp;
                                <button onClick={showModal} id = "registerButton">
                                    Register
                                </button>
                                <RegisterModal show={show2} setShow2={(bool) => setShow2(bool)}/>
                                <LoginModal show={show} setShow={(bool) => setShow(bool)}/>
                                
                            </div>
                        ) : (
                            <div>
                                Welcome {user.displayName}
                                &nbsp;
                                &nbsp;
                                <button onClick={logout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/academics" element={<Academics />}>
                </Route>
                <Route path="/admission" element={<Admission />}>
                </Route>
            </Routes>
        </>
    );
}

export default NavigationBar;