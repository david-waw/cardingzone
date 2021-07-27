import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'react-bootstrap/Button'
import "./checkout.scss"
import CheckoutItem from './checkout-item';
import { Redirect } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import {
  selectCurrentUser,
} from '../../redux/user/user.selectors';

function sayHello() {
 
  let userData = JSON.parse(localStorage.getItem('persist:root'));
  let ver = userData.user.[18]
  if (ver=="d") {
    window.location.href = '/addoder';
    
  } else {
    alert("Please Sign In")
    
  }
}


const CheckoutPage = ({ cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
   
    <div className=" gape">
    <Button className="checkoutButtons" id="oddbtn2" href="./ShopPage"  variant="outline-secondary" size="lg">
  <i class="fa fa-shopping-basket" id="cinbtcc2" aria-hidden="true"></i>Continue Shopping
  </Button>
  <Button className="checkoutButtons coinbit" id="oddBtn"  onClick={sayHello} variant="outline-primary" size="lg">
   <i class="fa fa-btc" id="cinbtcc" aria-hidden="true"></i>Proceed To Checkout
  </Button>
  
</div>
   
  </div>
  
);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  user:selectCurrentUser
});

export default connect(mapStateToProps)(CheckoutPage);
