import React, { useState } from 'react'
import { storage, db } from '../Config/config'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {

  selectCartTotal
} from '../../redux/cart/cart.selectors';
import  "./payment.scss"

export const AddOder = ({total}) => {



    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [town, setTown] = useState('');
    const [zip, setZip] = useState('');
    const [addinfo, setAddInfo] = useState('');
    const [country, setCountry] = useState('');
    
    const [adress, setAdress] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const routeChange = () =>{ 
      
      }
    
    

    // add product
    const addProduct = (e) => {
        e.preventDefault();
         db.collection('Oders').add({
                        email: email,
                        firstname: firstname,
                        lastname: lastname,
                        town: town,
                        zip: zip,
                        addinfo: addinfo,
                        country: country,
                       total:{total},
                        adress: adress,
                     


                    }).then(() => {
                        setTown('');
                        setZip('');
                        setAddInfo('');
                        setAdress('');
                        setEmail('');
                        setCountry('');
                        setFirstName('');
                        setLastName('');
                        setError('');
                       
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
        
                    let path = `oderconfirmed`; 
                    history.push(path);
            
    }

    return (
        <div className='container'>
            <br />
            <h2>BILLING DETAILS</h2>
            <hr />
            <div className="oderContainer">
            <form autoComplete="off" className='form-group oder' onSubmit={addProduct} >

<label htmlFor="Category">Email</label>
<input type="text" className='form-control' required
    onChange={(e) => setEmail(e.target.value)} value={email} />
<br />
<label htmlFor="Category">First Name</label>
<input type="text" className='form-control' required
    onChange={(e) => setFirstName(e.target.value)} value={firstname} />
<br />
<label htmlFor="Category">Last Name</label>
<input type="text" className='form-control' required
    onChange={(e) => setLastName(e.target.value)} value={lastname} />
<br />
<label htmlFor="Category">Country</label>
<input type="text" className='form-control' required
    onChange={(e) => setCountry(e.target.value)} value={country} />
<br />
<label htmlFor="Category">Town/City</label>
<input type="text" className='form-control' required
    onChange={(e) => setTown(e.target.value)} value={town} />
<br />
<label htmlFor="Category">Zip/Postcode</label>
<input type="text" className='form-control' required
    onChange={(e) => setZip(e.target.value)} value={zip} />
<br />
<label htmlFor="Category">Adress</label>
<input type="text" className='form-control' required
    onChange={(e) => setAdress(e.target.value)} value={adress} />
<br />
<label htmlFor="Category">Additional Information</label>
<input type="text" className='form-control addinfo' required
    onChange={(e) => setAddInfo(e.target.value)} value={addinfo} />
<br />

<button type="submit"   className='btn btn-success btn-md mybtn'>ADD ODER</button>
</form>
<div className="oderDetails">
                    <div id="oderTitle">YOUR ODER</div>
                    <div id="oderSumary">
                        <p>Total</p>
                        <p>{total}</p>
                    </div>
                    <div id="oderSumary" className="accoun">
                        <p>Bitcoin Account</p>
                        <p>Number Flani</p>
                    </div>
                    <p id="payment">WE ACCEPT BITCOIN CRYPTO<i class="fa fa-btc pnt" aria-hidden="true"></i></p>
                    <p id="payfooter">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="https://cardingbird.com/privacy/" target="_blank">privacy policy</a>.</p>
</div>

            </div>
          
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    
    total: selectCartTotal
  });
  
  export default connect(mapStateToProps)(AddOder);
  