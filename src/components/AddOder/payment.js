import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'


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
  const opensweetalert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'COPIED',
      showConfirmButton: false,
      timer: 1000
    })
  }


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
            <p>${total}</p>
          </div>
          <div id="oderSumary" className="accoun">
            <p>Bitcoin Adress</p>
            <p>3Nj6PsiyjaWyZQRmnn1rrxyT8zNSWDeTVq</p>


          </div>
          <div className="bitCopy">
            <Button id="bit button" onClick={() => { copyToClipBoard('3Nj6PsiyjaWyZQRmnn1rrxyT8zNSWDeTVq'); opensweetalert() }}>

              Click here to copy wallet
            </Button>
          </div>

          <p id="payment">WE ACCEPT BITCOIN CRYPTO<i class="fa fa-btc pnt" aria-hidden="true"></i></p>

          <p id="payfooter">Send Bitcoin  To The Above Bitcoin Adress</p>
          <p id="payfooters">your oder will be sent to your email after payment is recieved </p>

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
