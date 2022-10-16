import React, { useEffect, useState } from 'react'
import "./shopPage.css"
import {numberToDots} from "../Utils/Utility"

function ShopPage(props) {
    const [key, setKey] = useState("iphone ipad ipod watch");
    let arrShow = [];
    for (let i = 0; i < props.data.length; i++) {
        if (key.includes(props.data[i].category)) {
            arrShow.push(props.data[i])
        }
    }
    console.log(arrShow)
    
    let showItem = []
    for (let i = 0; i <arrShow.length; i++) {
        showItem.push(<div className='itemShop'><img className='itemImgShop' src ={arrShow[i].img1}></img>
        <p>{arrShow[i].name}</p>
        <p>{numberToDots(arrShow[i].price) + " VNĐ"}</p>
        </div>)
    }
    console.log(showItem)
    return (
        <div className='container__categories'>
            <div className='categories'>
                <h3>CATEGORIES</h3>
                <ul>
                    <li className='btn_category'><button onClick={() => { setKey("iphone ipad ipod watch") }}>All</button></li>
                    <li className='btn_category'><button onClick={() => { setKey("iphone") }}>IPHONE & MAC</button></li>
                    <li><button onClick={() => { setKey("iphone ipad ipod watch") }}>Apple</button></li>
                    <li><button onClick={() => { setKey("iphone") }} >iPhone</button></li>
                    <li><button onClick={() => { setKey("ipad") }} >iPad</button></li>
                    <li><button >Macbook</button></li>
                    <li className='btn_category'><button>WIRELESS</button></li>
                    <li><button onClick={() => { setKey("airpod") }} >Airpod</button></li>
                    <li><button onClick={() => { setKey("watch") }} >Watch</button></li>
                    <li className='btn_category'><button>OTHER</button></li>
                    <li><button >Mouse</button></li>
                    <li><button >Keyboard</button></li>
                    <li><button >Other</button></li>
                </ul>
            </div>
            <div className='item__categories'>
            <div >
                <input placeholder='Enter Search Here!'></input>
                <div className='listShop'>
                    {showItem}
                    </div>
            </div>
            </div>
        </div>
    )
}
export default ShopPage;