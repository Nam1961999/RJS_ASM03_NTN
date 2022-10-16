import React, { useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Routes, Route, useParams } from 'react-router-dom';
import ItemDevice from '../HomePage/Item/ItemDevice';
import { numberToDots } from "../Utils/Utility"
import "./detailPage.css"

function DetailPage(props) {
    let { id } = useParams();
    const [detailDevice, setDetailDevice] = useState([])
    const [previewId, setPreviewId] = useState(1);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        for (let i = 0; i < 8; i++) {
            if (props.data[i] && props.data[i]._id.$oid === id) {
                setDetailDevice(props.data[i])
                // console.log(detailDevice)
            }
        }
    })

    const changeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const addItemToCart = () => {
        let user = props.user;

        user.cart[id] = quantity;

        props.updateUser(user);
        alert("add to Cart Succesfully")
    }


    let long_desc = "";
    if (detailDevice.long_desc) {
        let descLines = detailDevice.long_desc.split('\n•');
        if(descLines.length < 2) descLines = detailDevice.long_desc.split('\n-');
        if (descLines.length > 2) {
            let lines = [];

            for (let i = 1; i < descLines.length; i++) {
                lines.push(<li key={i}>
                    {descLines[i]}
                </li>)
            }
            long_desc = <div>
                <h6>{descLines[0]}</h6>
                <ul>
                    {lines}
                </ul>
            </div>
        }
    }

    const getRelatedItems = () => {
        let relatedArray = []
        for (let i = 0; i < props.data.length; i++) {
            if (props.data[i].category == detailDevice.category && props.data[i]._id.$oid != detailDevice._id.$oid) {
                relatedArray.push(i);
            }
        }

        return relatedArray;
    }

    var releatedItems = getRelatedItems();
    var relatedList = [];
    for (let i = 0; i < releatedItems.length; i++) {
        relatedList.push(
            <div style={{ width: "200px", marginRight: "18px" }} key={i}>
                <ItemDevice index={releatedItems[i]} />
            </div>

        )
    }

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [detailDevice]);


    return (
        <div className='container_detail'>
            <div className='contaiter'>
                <div className='more_img'>
                    <img onClick={() => { setPreviewId(1) }} className={previewId == 1 ? "previewed" : ""} src={detailDevice.img1}></img>
                    <img onClick={() => { setPreviewId(2) }} className={previewId == 2 ? "previewed" : ""} src={detailDevice.img2}></img>
                    <img onClick={() => { setPreviewId(3) }} className={previewId == 3 ? "previewed" : ""} src={detailDevice.img3}></img>
                    <img onClick={() => { setPreviewId(4) }} className={previewId == 4 ? "previewed" : ""} src={detailDevice.img4}></img>
                </div>
                <div className='detail_container'>
                    <img src={detailDevice["img" + previewId]}></img>
                    <div>
                        <h3>{detailDevice.name}</h3>
                        <p>{numberToDots(detailDevice.price) + " VNĐ"}</p>
                        <p>{detailDevice.short_desc}</p>
                        <p>CATEGORY: {detailDevice.category}</p>
                        <div>
                            <input placeholder="QUANTITY" value={quantity} type="number" min="1" max="10" onChange={changeQuantity}></input>
                            <button onClick={addItemToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className='description'>DESCRIPTION</button>
            <h4>PRODUCT DESCRIPTION</h4>
            {long_desc}
            <div className='related'>
                <h5>RELATED PRODUCTS</h5>
                <div style={{ display: "flex" }}>
                    {relatedList}
                </div>
            </div>
        </div>
    )
}
export default DetailPage;