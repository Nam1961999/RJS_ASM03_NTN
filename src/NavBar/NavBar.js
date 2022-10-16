import React, { useState } from "react";
import style from "./NavBar.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function NavBar(props) {
    // console.log(props.userInfo)

    const navigate = useNavigate();
    const Home = () => {
        navigate(`/`)
    }
    const Shop = () => {
        navigate(`/shop`)
    }
    const Cart = () => {
        navigate(`/cart`)
    }
    const Login = () => {
        navigate(`/login`)
    }
    const LogOut = () => {
        props.updateUser(null);
    }

    return (
        <div className="container__navbar">
            <div className="left__navbar">
                <div onClick={Home} ><a >Home</a></div>
                <div onClick={Shop} ><a >Shop</a></div>
            </div>
            <div className="name__navbar"><h3>BOUTIQUE</h3></div>
            <div className="right__navbar">
                <div onClick={Cart}><a > <i className="fas fa-cart-plus"></i> Cart</a></div>
                <div id={!props.userInfo ? "" : "person"} onClick={Login} ><a > <i className="fas fa-user"></i> Login</a></div>
                <div id={props.userInfo ? "" : "person"} >
                    <a > <i className="fas fa-user"></i> {props.userInfo ? props.userInfo.fullName : ""} <i className="fas fa-caret-down"></i></a>
                </div>
                <div onClick={LogOut} ><a >(Log Out)</a></div>
            </div>

        </div>
    )
}
export default NavBar;