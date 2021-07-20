import React, {Component} from 'react';
import './product.scss'
import { connect } from 'react-redux';
import CustomButton from '../custombutton/custombutton';
import { addItem } from "../../redux/cart/cart.actions";
import { v4 as uuidv4 } from 'uuid';

export  class Products extends Component {

constructor() {
    super()
    this.state = {
       
        product:[ JSON.parse(localStorage.getItem('notifiedRoom'))],
    }
  }
 
    render() {
        
        const { product } = this.state
        const image = product.[0].image
        const name = product.[0].name
        const price = product.[0].price
        const detail= product.[0].description
      const { v4: uuidv4 } = require('uuid');
      const id=uuidv4()
   return (
        <>
        <div className="context">
               
                       <div className="details">
                           <div className="big-img">
                           <img src={image} alt=""/>
                           </div>
                           <div className="box">
                               <div className="row">
                               <h2>{name}</h2>
               <span>${price}</span>
               <span>{ id}</span>
                       </div>
                       <p>{detail}</p>
                       
                       <CustomButton onClick={() => this.props.addItem(({image, name, price,id}))} inverted>Add to cart </CustomButton>
                           </div>
                       </div>
              
                    
                </div>
                </>
    )
    }
}


const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(Products);