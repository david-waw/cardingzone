import React, {Component} from 'react';
import './product.scss'
export default class Products extends Component {

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
        const price=product.[0].price
        
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
                       </div>
                       <p>{name}</p>
                       <p>{name}</p>
                       <button className="cart">Add to cart</button>
                           </div>
                       </div>
              
                    
                </div>
                </>
    )
    }
}