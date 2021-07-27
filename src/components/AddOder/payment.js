import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'react-bootstrap/Button'


import {

  selectCartTotal
} from '../../redux/cart/cart.selectors';
import "./payment.scss"

export const AddOder = ({ total }) => {
  const [copySuccess, setCopySuccess] = useState('');
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };



  return (
    <div className='containerer'>
      <br />
      <h2>BILLING DETAILS</h2>
      <hr />
      <div className="oderContainer">
        <div className="oderDetails">
          <div id="oderTitle">YOUR ODER</div>
          <div id="oderSumary">
            <p>Total</p>
            <p>{total}</p>
          </div>
          <div id="oderSumary" className="accoun">
            <p>Bitcoin Adress</p>
            <p>bc1qpwjgcgstf98vysz3va0yvc50u4x8pujr2ltmdm</p>


          </div>
          <div className="bitCopy">
          <Button id="bit button" onClick={() => copyToClipBoard('bc1qpwjgcgstf98vysz3va0yvc50u4x8pujr2ltmdm')}>

Click here to copy wallet
</Button>
          </div>
         
          <p id="payment">WE ACCEPT BITCOIN CRYPTO<i class="fa fa-btc pnt" aria-hidden="true"></i></p>

          <p id="payfooter">Send Bitcoin  To The Above Bitcoin Adress</p>

        </div>

      </div>

      <p className="copysucesss">{copySuccess}</p>

    </div>

  )
}

const mapStateToProps = createStructuredSelector({

  total: selectCartTotal
});

export default connect(mapStateToProps)(AddOder);
