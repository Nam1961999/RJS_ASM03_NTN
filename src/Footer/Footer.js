import React from "react";
import style from "./Footer.css"
function Footer() {
  return (
    <div className="container__footer">
      <div className="row">
      <div className="col-md"></div>
        <div className="col-md">
          <h6 className="colum__footer"> CUSTOMER SERVICES</h6>
            <li className="li__footer"><a href="#">Help & Contact Us</a></li>
            <li className="li__footer"><a href="#">Return & Refunds</a></li>
            <li className="li__footer"><a href="#">Online Store</a></li>
            <li className="li__footer"><a href="#">Term & Conditions</a></li>
        </div>
        <div className="col-md">
          <h6 className="colum__footer">COMPANY</h6>
        
            <li className="li__footer"><a href="#">What we do</a></li>
          <li className="li__footer"><a href="#">Avaloable services</a></li>
          <li className="li__footer"><a href="#">Lastest Posts</a></li>
          <li className="li__footer"><a href="#">FAQs</a></li>
          
        </div>
        <div className="col-md">
          <h6 className="colum__footer">SOCIAL MEDIA</h6>
          <li className="li__footer"><a href="#">Twitter</a></li>
          <li className="li__footer"><a href="#">Instagram</a></li>
          <li className="li__footer"><a href="#">Facebook</a></li>
          <li className="li__footer"><a href="#">Pinterest</a></li>
        </div>
        <div className="col-md"></div>
      </div>
    </div>
  )

}
export default Footer;