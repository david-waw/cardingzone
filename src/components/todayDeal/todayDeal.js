
import React, {useContext } from 'react'
import {ProductContext } from "../Data/CategoryContents/todayDeals.js"
import './todayDeal.scss'
import { Button } from 'react-bootstrap';


const Deal = () => {
    const { product } = useContext(ProductContext)
    console.log(product)
 
    return (
        
        <>
      
            <div className='productsContainer'>
                {product.length === 0 && <div>slow internet...no products to display</div>}
                { product.slice(0, 19).map(category => (
              
                 
 <div className='productCard' key={category.ProductsID}>
                        <div className='productImg'>
                            <img src={category.ProductImg} alt="not found" />
                        </div>
                        <div className='productCountry'>
                            {category.country}
                        </div>
                        <div className='productName'>
                            {category.ProductName}
                        </div>
                        <div className='Price'>
                            {category.ProductPrice}
                        </div>
                    </div>

                ))}
            </div>
            <Button variant="outline-primary"><i class="fa fa-search" aria-hidden="true"></i>View All Deals</Button>{' '}
        </>
    )
}
export default Deal