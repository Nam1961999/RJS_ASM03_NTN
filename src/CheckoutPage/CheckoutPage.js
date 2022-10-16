import React from 'react'
import "./checkoutPage.css"
import { useNavigate } from "react-router-dom";
import { numberToDots } from "../Utils/Utility"

function CheckoutPage(props) {
    var items = props.user ? props.user.cart : {};
    const navigate = useNavigate();

    var items = props.user ? props.user.cart : {};
    console.log(JSON.stringify(items))

    var itemIds = Object.keys(items);

    let listItem = [];
    let total = 0;
    for (let i = 0; i < itemIds.length; i++) {
        listItem.push(
            <CartItem key={i} quantity={items[itemIds[i]]} info={props.data[i]} />
        );
        total += items[itemIds[i]] * props.data[i].price
    }
    return (
        <div className='checkout'>
            <div className='checkout_top'>
                <h1 className='title_checkout'>CHECKOUT</h1>
                <div className='title_director'>
                    <p onClick={() => { navigate(`/`) }}>HOME/</p>
                    <p onClick={() => { navigate(`/cart`) }}>CART/</p>
                    <p className='curent_checkout'>CHECKOUT</p>
                </div>
            </div >
            <div className='checkout_container'>
                <div className='input_checkout'>
                    <h3>BILLING DETAILS</h3>
                    <label for="inputPassword5" className="form-label">FULL NAME:</label>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <label for="inputPassword5" className="form-label">EMAIL:</label>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <label for="inputPassword5" className="form-label">PHONE NUMBER:</label>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <label for="inputPassword5" className="form-label">ADDRESS:</label>
                    <input type="text" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <button className='btn_checkout'>Place order</button>
                </div>
                <div>
                    <h5>YOUR ORDER</h5>

                    <table class="table table-striped">
                        <thead>
                            <tr class="table-secondary">
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">TOTAL</th>

                            </tr>
                        </thead>
                        <tbody>
                            {listItem}
                        </tbody>
                        
                    </table>
                        <div className='total_checkin'>TOTAL:  {numberToDots(total)} VNĐ </div>
                </div>
            </div>
        </div>
    )
}
function CartItem(props) {
    var info = props.info ? props.info : {};

    return (
        <tr>
            <td>{info.name}</td>
            <td>{numberToDots(info.price) + " VNĐ"}</td>
            <td>X{props.quantity}</td>
            <td>{numberToDots(info.price * props.quantity) + " VNĐ"}</td>
        </tr>
    )
}
export default CheckoutPage;

