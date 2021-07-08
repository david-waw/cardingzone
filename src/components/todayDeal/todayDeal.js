
import React, {useContext } from 'react'
import {ProductContext } from "../Data/CategoryContents/todayDeals.js"
import './todayDeal.scss'
import './todayDeal.css'
import { Button } from 'react-bootstrap';
import CustomButton from '../custombutton/custombutton'
import { useHistory } from "react-router-dom";


const Deal = () => {
    const { product } = useContext(ProductContext)
    console.log(product)
  
    const click = (...props) => {
        let notifiedRoom = {
            name: props.[1],
           image: props.[2],
            price: props.[0]
        };
       
        var data = localStorage.setItem('notifiedRoom', JSON.stringify(notifiedRoom));
        console.log(data)
        handleClick()
    }
   
        const history = useHistory();
      
        function handleClick() {
          history.push("/product");
        }
      
   
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
                        <CustomButton inverted  onClick = {()=>click(category.ProductPrice,category.ProductName,category.ProductImg)}>DETAILS</CustomButton>
                    </div>

                ))}
            </div>
            <Button variant="outline-primary"><i class="fa fa-search" aria-hidden="true"></i>View All Deals</Button>{' '}
        </>
    )
}
export default Deal