import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../assets/ShoppingIcon.svg';

import './cart-icon.scss';

const Cost = ({ itemCount }) => (

  <div className='cost'  >
    
  
    <i id="costicon" class="fa fa-usd" aria-hidden="true"></i>{itemCount}
  </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({cart:{cartItems}})=>({
    itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity* cartItem.price, 0)
   
   
});


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cost);
  