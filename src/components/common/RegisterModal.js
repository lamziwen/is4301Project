

import React, { useState, useEffect } from 'react';
import {
    useNavigate
} from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../navbar/service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import './LoginModal.css';
import Modal from 'react-bootstrap/Modal';
function RegisterModal({ show, setShow2 }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
      };

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
            <Modal show={show} onHide={setShow2}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="register__container">
                        <input
                            type="text"
                            className="register__textBox"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            className="register__textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                        <input
                            type="password"
                            className="register__textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="register__btn" onClick={register}>
                        Register
                    </button>
                    <button
                        className="register__btn register__google"
                        onClick={signInWithGoogle}
                    >
                        Register with Google
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterModal;