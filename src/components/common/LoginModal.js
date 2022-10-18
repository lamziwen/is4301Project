

import React, { useState, useEffect } from 'react';
import {
    useNavigate
} from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, db } from "../navbar/service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Toast from 'react-bootstrap/Toast';
import './LoginModal.css';
import Modal from 'react-bootstrap/Modal';

function ToastMessageNotification({show,setShow, message}) {
    return (
      <Toast show={show} delay={3000} autohide onClose={() => setShow(false)}>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    );
  }


function LoginModal({show,setShow}) {
    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    function triggerLogin() {
        logInWithEmailAndPassword(email, password).then((resp) => {
            setToastShow(true)
            setToastMessage(resp) 
            // setTimeout(()=>{
            //     setToastShow(false)
            // }, 5000)
        })
    }
    useEffect(() => {
        if (loading) {
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
                    <ToastMessageNotification show={toastShow} setShow={(bool) => setToastShow(bool)} message = {toastMessage}/>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="login__btn"
                        onClick={triggerLogin}
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