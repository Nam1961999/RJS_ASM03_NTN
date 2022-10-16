import React, { useEffect, useState } from 'react'
import "./homePage.css"
import Categories from "./Categories/Categories"
import ItemDevice from './Item/ItemDevice';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { numberToDots } from "../Utils/Utility"

function HomePage(props) {
    // Modal
    const [show, setShow] = useState(false);
    const [device, setDevice] = useState(0)



    const handleClose = () => setShow(false);
    const handleShow = (i) => {
        setShow(true)
        setDevice(i)
    }

    const [background__url, setBackground__url] = useState("");
    const [currIndex, setCurrIndex] = useState(0);
    const [popUp, setPopUp] = useState("none")
    const navigate = useNavigate();
    if (props.data && props.data.length > 0 && !background__url) {
        let background__url = props.data[Math.floor(Math.random() * 8)].img2;
        setBackground__url(background__url);
    }
    // Background Randum
    useEffect(() => {
        if (props.data && props.data.length > 0) {
            let background__url = props.data[currIndex].img2;
            if (background__url) {
                setTimeout(function () {
                    setCurrIndex((currIndex + 1) % 8);
                    setBackground__url(background__url);

                }, 2500);
            }
        }

    }, [background__url]);

    //Live CHat
    const OnLiveChat = () => {
        if (popUp === "none") setPopUp("")
        else setPopUp("none")
    }

    const director = () => {
        navigate(`/shop`)
    }
    useEffect(() => {
    }, [background__url])
    // console.log(props.data.length)
    return (
        <div className='home_container'>
            <div>
                <Modal class="homeModal" size="xl" show={show} onHide={handleClose} animation={false}>
                    <Modal.Header >
                        <div className="popUp">
                            <img className="img_popup" src={props.data[device] ? props.data[device].img1 : ""}></img>
                            <div className='modal-item-des'>
                                <h5>{props.data[device] ? props.data[device].name : ""}</h5>
                                <h6>{numberToDots(props.data[device] ? props.data[device].price : "")}</h6>
                                <p>{props.data[device] ? props.data[device].short_desc : ""} </p>
                                <button className='btn_popup' onClick={() => {
                                    navigate(`/detail/${props.data[device]._id.$oid}`)
                                }}>
                                    <i class="fas fa-cart-plus"></i> View Detail</button>
                            </div>
                        </div>
                    </Modal.Header>
                </Modal>
            </div>
            <div className='row banner-bgr' >
                <div className='col-5 md banner_content'>
                    <h3>New Inspiration 2022</h3>
                    <h1>20% OFF ON NEW SEASON</h1>
                    <button className='banner-btn' onClick={() => { navigate(`/shop`) }}> Browse collections </button>
                </div>
                <div className='col-7 md banner'>
                    <img
                        src={background__url} height="580px"
                    />
                </div>
            </div>
            <div className='name_category'>
                <h6>CAREFULLY CREATE COLLECTIONS </h6>
                <h4>BROWSE OUR CATEGORIES</h4>
            </div>
            <div className='Categories'>
                <div >
                    <img className='img_category_1' src="images/product_1.png" onClick={director}></img>
                    <img className='img_category_1' onClick={director} src="images/product_2.png"></img>
                </div>
                <div >
                    <img className='img_category' onClick={director} src="images/product_3.png"></img>
                    <img onClick={director} className='img_category' src="images/product_4.png"></img>
                    <img onClick={director} className='img_category' src="images/product_5.png"></img>
                </div>

            </div>

            <div className="list_item">
                <div className='title_item'>
                    <h6>MADE THE HARD WAY</h6>
                    <h2>TOP TRENDING PRODUCTS</h2>
                </div>
                <div className='list_item_1' >
                    <div variant="primary" className='col' onClick={() => { handleShow(0) }}> <ItemDevice mode="home" index="0" /></div>
                    <div variant="primary" className='col' onClick={() => { handleShow(1) }}> <ItemDevice mode="home" index="1" /></div>
                    <div variant="primary" className='col' onClick={() => { handleShow(2) }}> <ItemDevice mode="home" index="2" /></div>
                    <div variant="primary" className='col' onClick={() => { handleShow(3) }}> <ItemDevice mode="home" index="3" /></div>

                </div>
                <div className='list_item_1'>
                    <div variant="primary" className='col' onClick={() => { handleShow(4) }}> <ItemDevice mode="home" index="4" /></div>
                    <div variant="primary" className='col' onClick={() => { handleShow(5) }}> <ItemDevice mode="home" index="5" /></div>
                    <div variant="primary" className='col' onClick={() => { handleShow(6) }}> <ItemDevice mode="home" index="6" /></div>
                    <div variant="primary" className='col' onClick={() => { handleShow(7) }}> <ItemDevice mode="home" index="7" /></div>
                </div>
            </div>
            <div className="more_about" >
                <div className='row' id="about">
                    <h3>FREE SHIPPING</h3>
                    <p id="free">Free shipping worlwide</p>
                </div >
                <div className='row' id="about" >
                    <h3>24 X 7 SERVICE</h3>
                    <p id="free">Free shipping worlwide</p>
                </div>
                <div className='row' id="about">
                    <h3>FESTIVAL OFFER</h3>
                    <p id="free">Free shipping worlwide</p>
                </div>
            </div>
            <div className="contact">
                <div className='contact_left'>
                    <h5>LET'S BE FRIENDS!</h5>
                    <p>Nisi nisi tempor consequat loboris nisi.</p>
                </div>
                <div className="subscribe" >
                    <input placeholder='Enter your email address'></input>
                    <button className='btnSub'>Subscribe</button>
                </div>
            </div>

            <div className='liveChat'>
                <i className="fab fa-facebook-messenger" onClick={OnLiveChat}></i></div>
            <div style={{ display: { popUp } }}>

            </div>
        </div>
    )
}
export default HomePage;