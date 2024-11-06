
import styles from './Login.module.css';
import InputControl from '../InputControl/InputControl';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {  FaEnvelope, FaLock } from 'react-icons/fa';
function Login(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
    return(
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>
                <InputControl label="Email" placeholder="Enter your Email"  
                onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))} icon={<FaEnvelope />}/>
                <InputControl label="Password" placeholder="Enter your Password" icon={<FaLock />}
                onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))} />
                    <b className={styles.error}>{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                        <p>
                        New User{" "}
                    <span>
                        <Link to="/signup">Sign up</Link>
                    </span>
                    </p>
                    <p>
                      Login with phone? <Link to="/phonelogin">Phone Login</Link>
                    </p>
        </div>
    </div>
    
    )
}
export default Login;