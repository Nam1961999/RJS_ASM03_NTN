import React from 'react'
import "./cartPage.css"
import { numberToDots } from "../Utils/Utility"
import { useNavigate } from "react-router-dom";

function CartPage(props) {
    var items = props.user ? props.user.cart : {};
    console.log(JSON.stringify(items))
    const navigate = useNavigate();

    var itemIds = Object.keys(items);
    let total = 0
    let listItem = [];
    for (let i = 0; i < itemIds.length; i++) {
        listItem.push(
            <CartItem key={i} quantity={items[itemIds[i]]} info={props.data[i]} />
        );
        total += items[itemIds[i]] * props.data[i].price
    }

    return (
        <div className='cart'>
            <div className='title_cart'>
                <h1>CART</h1>
                <p>CART</p>
            </div>
            <div className='table_container'>
                <h5>SHOPPING CART</h5>
                <div className='cart_content'>
                    <div>

                        <table class="table table-striped">
                            <thead>
                                <tr class="table-secondary">
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">PRODUCT</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col">TOTAL</th>
                                    <th scope="col">REMOVE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listItem}
                            </tbody>
                        </table>
                        <div className='director_cart'>
                            <button onClick = {()=>{ navigate(`/`)}}><i class="fas fa-arrow-left"></i>ContinueShopping</button>
                            <button onClick = {()=>{ navigate(`/checkout`)}} className='ProceedToCheckout'>ProceedToCheckout <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>


                    <div className='total_price'>
                        <h5>CART TOTAL</h5>
                        <h6>SUBTOTAL :   {numberToDots(total)} VNĐ </h6>
                        <h6>TOTAL: :   {numberToDots(total)} VNĐ </h6>
                        <input placeholder='Enter your coupon' className='input_voucher'></input>
                        <button> <i className="fas fa-gift"></i>Apply coupon</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

function CartItem(props) {
    var info = props.info ? props.info : {};

    return (
        <tr>
            <td scope="row">{<img src={info.img3} height="200px" width="200px" />}</td>
            <td>{info.name}</td>
            <td>{numberToDots(info.price) + " VNĐ"}</td>
            <td>{numberToDots(info.price * props.quantity) + " VNĐ"}</td>
            <td>{props.quantity}</td>
            <td><i class="fas fa-trash-alt"></i></td>
        </tr>
    )
}

export default CartPage;