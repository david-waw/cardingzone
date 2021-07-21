import React, { useContext } from 'react'

import {ReviewContext} from "../Data/CategoryContents/reviews"
import "./rev2.scss"
import { Button } from 'react-bootstrap';

const Rev2 = () => {
    const {product} = useContext(ReviewContext)
   
  
   
    return (
        
        <>
      
            <div className='reviews'>
            <div className="head">
           
            <p id='heading'>CUSTOMER FEEDBACK</p>
                </div>
                <div className="reviewContainer">
                {product.length === 0 && <div>slow internet...no products to display</div>}
                {product.map(category => (
              
                 
                    <div className='reviewCards ' key={category.ProductsID}>
                   
                        <div className='reviewImg'>
                            <img src={category.ProductImg} alt="not found" />
                        </div>
                        <div className='stars'>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className='headingCard'>
                        {category.heading}
                        </div>
                        <div className='bodyCard'>
                        {category.body}
                        </div>
                        <div className='bodyFooter'>
                        {category.contry}/{category.name}
                           
                            </div>
                    </div>

                ))}
                </div>
               
               
            </div>
          
          </>
    )
}
export default Rev2



   