import React from 'react';
import CustomButton from '../custombutton/custombutton';
import CartItem from './cart-item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { createStructuredSelector } from 'reselect';
import './cart.scss';

const CartDropdown = ({cartItems,history,dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
<CustomButton id="butoncart"
 onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CART</CustomButton>
  </div>

)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))
