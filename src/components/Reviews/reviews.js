
import React, {useContext } from 'react'
import {ReviewContext} from "../Data/CategoryContents/reviews"
import './reviews.css'
import { Button } from 'react-bootstrap';


const Review = () => {
    const {product} = useContext(ReviewContext)
    console.log(product)
  
   
    return (
        
        <>
      
            <div className='reviews'>
            <div className="head">
            <i className="fas fa-expand-alt"></i>
            <p id='heading'>TOP VERIFIRD REVIEWS</p>
                </div>
                <div className="reviewContainer">
                {product.length === 0 && <div>slow internet...no products to display</div>}
                {product.slice(0, 3).map(category => (
              
                 
                    <div className='reviewCard' key={category.ProductsID}>
                   
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
                        <div className='heading'>
                        {category.heading}
                        </div>
                        <div className='body'>
                        {category.body}
                            </div>
                    </div>

                ))}
                </div>
                <div className='reviewBurrons'>
                <a href="/ShopPage">
            <Button variant="outline-primary">   <i class="fa fa-star" aria-hidden="true"></i>Leave a review</Button>{' '}
                </a>
                <a href="/ShopPage">
            <Button variant="outline-primary"><i class="fa fa-play" aria-hidden="true"></i>View All Reviews</Button>{' '}
           </a>
                </div>
               
            </div>
          
          </>
    )
}
export default Review