import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'react-bootstrap/Button'

import CheckoutItem from './checkout-item';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const CheckoutPage = ({ cartItems, total }) => (
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
    <div className="d-grid gap-2">
    <Button className="checkoutButtons"  href="./ShopPage"  variant="outline-secondary" size="lg">
  <i class="fa fa-shopping-basket" aria-hidden="true"></i>Continue Shopping
  </Button>
  <Button className="checkoutButtons" href="./addoder"  variant="outline-primary" size="lg">
   <i class="fa fa-btc" aria-hidden="true"></i>Proceed To Checkout
  </Button>
  
</div>
   
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
