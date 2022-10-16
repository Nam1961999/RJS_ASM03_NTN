import React, { useEffect } from 'react'
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
// import history from './history';
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
    const [info, setInfo] = useState({
        email: "",
        passWord: "",

    }
    )
    const navigate = useNavigate();
    const [login, setLogin] = useState(false)
    const RegisterPage = (e) => {
        var temp = info;
        var name = e.target.name;
        var value = e.target.value;
        temp[name] = value;
        setInfo({ ...temp });
    }
    // console.log(info) // test
    const SignIn = () => {
        if (info.email === "") {
            alert("Plese input your Email!")
        }
        else if (info.passWord === "") {
            alert("Please input your passWord")
        }
        else {
            var listAccount = localStorage.getItem("userData");
            if (!listAccount) {
                listAccount = {};
            } else {
                listAccount = JSON.parse(listAccount);
            }

            if (!listAccount[info.email]) {
                alert("Email or Password is Wrong!")
            }
            else if (info.passWord != listAccount[info.email].passWord) {
                alert("Email or Password is Wrong!")
            }
            else {
                setLogin(true)
                props.functionCallback(listAccount[info.email]);
                // window.location.href = "/"
                alert("Sign in succesfully")
                navigate(`/`)
            }

        }
    }
    //  
    useEffect(() => {
        if (login) {
            props.functionCallback(true)
        }
    }, [login])
    return (
        <div className='register'>
            <div className="box_register">
                <h3 className='SignUp'>Sign Up</h3>
                <div className='input_register'>

                    <input className='input' name='email' placeholder='email' value={info.email} onChange={RegisterPage}></input>
                    <input className='input' name='passWord' placeholder='passWord' value={info.passWord} onChange={RegisterPage} type="passWord"></input>

                    <button className='btn btn_register' onClick={SignIn}>SIGN IN</button>
                    <p>Create an acount? <a href='#' className='click'> Sign up</a></p>
                </div>

            </div>

        </div>

    )
}
export default LoginPage;