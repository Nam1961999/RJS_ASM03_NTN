import React, { useState } from "react";
import './ItemDevice.css';
import { DataContext } from "../../App";
import { useContext } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {numberToDots} from "../../Utils/Utility"
import { useNavigate } from "react-router-dom";

function ItemDevice(props) {
    const { showModal = false, onClose = () => { } } = props;
    const [show, setShow] = useState(showModal);
    const navigate = useNavigate();

    const data = useContext(DataContext)
    const [linkDevice, setLinkDevice] = useState("")
    const [nameDevice, setNameDevice] = useState("")
    const [priceDevice, setPriceDvice] = useState("")
    const [short_desc, setShort_desc] = useState("")
    const [id, setId] = useState("")


    React.useEffect(() => {
        setShow(showModal);
    }, [showModal]);

    const handleClose = () => {
        setShow(false);

        typeof onClose === 'function' && onClose();
    };
    const handleShow = () => setShow(true);

    React.useEffect(()=>{
        if (data && data.length > 0) {
            setLinkDevice(data[props.index].img1)
            setNameDevice(data[props.index].name)
            setPriceDvice(data[props.index].price)
            setId(data[props.index]._id.$oid)
            // console.log(data[props.index]._id.$oid)
        }
    }, [props.index, data]);
 


    
    const viewDetail = ()=>{
        if(props.mode == "home") return;
        navigate("/detail/" + id);
    }

    return (
        <div className="item" onClick={viewDetail}>
            <img src={linkDevice} className="photo__item"></img>
            <div className="detail_item" >
            {/* <img src={linkDevice} className="photo__item" onClick={() => { navigate(`/detail/${id}`) }}></img>
            <div className="detail_item" onClick={() => { navigate(`/detail/${id}`)}}> */}
                <p>{nameDevice}</p>
                <p>{numberToDots(priceDevice)} VNĐ</p>
            </div>

        </div>
    )
}
export default ItemDevice