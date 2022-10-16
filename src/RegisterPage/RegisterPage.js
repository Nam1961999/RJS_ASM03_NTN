import React, { useState } from 'react'
import "./registerPage.css"
function RegisterPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        passWord: "",
        phone: ""
    }
    )
    const RegisterPage = (e) => {
        var temp = form;
        var name = e.target.name;
        var value = e.target.value;
        temp[name] = value;
        setForm({ ...temp });
    }
    console.log(form)
const SignUp = ()=>{
if (form.fullName ==""){ 
    alert ("Please input your Name!")
}
else if (form.email =="") {
    alert ("Please input your Email!")
}
else if (form.passWord =="") {
    alert ("Please input your password!")
}
else if (form.phone =="") {
    alert ("Please input your phone!")
}
else {    
    form.cart = {};

    var listAccount = localStorage.getItem("userData");
    if(!listAccount){
        listAccount = {};
    }else{
        listAccount = JSON.parse(listAccount);
    }

    if(listAccount[form.email]){
        alert ("Email has existed!")
    }else{
        listAccount[form.email] = form;
    }

    localStorage.setItem("userData", JSON.stringify(listAccount))
    window.location.href = "/login"
    alert ("Sign up succesfully")
}}
return (
    <div className='register'>
        <div className="box_register">
            <h3 className='SignUp'>Sign Up</h3>
            <div className='input_register'>
                <input className='input' name='fullName' placeholder='FullName' value={form.fullName} onChange={RegisterPage}></input>
                <input className='input' name='email' placeholder='email' value={form.email} onChange={RegisterPage}></input>
                <input className='input' type = "password" name='passWord' placeholder='passWord' value={form.passWord} onChange={RegisterPage}></input>
                <input className='input' name='phone' placeholder='phone' value={form.phone} onChange={RegisterPage}></input>
                
                <button className='btn btn_register' onClick = {SignUp}>SIGN UP</button>
                <p>Login? <a href='#' className='click'> Click</a></p>
            </div>
        </div>

    </div>
)
}
export default RegisterPage;