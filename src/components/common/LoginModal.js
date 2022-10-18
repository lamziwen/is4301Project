

import React, { useState, useEffect } from 'react';
import {
    useNavigate
} from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, db } from "../navbar/service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import './LoginModal.css';
import Modal from 'react-bootstrap/Modal';

function LoginModal({show,setShow}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(show)
    useEffect(() => {
        if (loading) {
            console.log(user)
            return;
        }
        if (user) {
            navigate("/");
        }
    }, [user, loading]);
    return (
        <>

            <Modal show={show} onHide={setShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="login__container">
                        <input
                            type="text"
                            className="login__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                        <input
                            type="password"
                            className="login__textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="login__btn"
                        onClick={() => logInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                    <button className="login__btn login__google" onClick={signInWithGoogle}>
                        Login with Google
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;