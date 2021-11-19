
import React, { useContext } from 'react'
import { ProductContext } from "../Data/CategoryContents/todayDeals.js"
import './todayDeal.scss'
import './todayDeal.css'
import { Button } from 'react-bootstrap';
import CustomButton from '../custombutton/custombutton'
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'


const Deal = () => {
    const { product } = useContext(ProductContext)
    console.log(product)

    const click = (...props) => {
        let notifiedRoom = {
            name: props.[2],
            image: props.[3],
            price: props.[0],
            description: props.[1]
        };
        console.log(props)
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

            <div className='productsContainers'>
                {product.length === 0 && <div><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>}
                {product.slice(0, 19).map(category => (


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
                            ${category.ProductPrice}
                        </div>
                        <CustomButton inverted onClick={() => click(category.ProductPrice, category.description, category.ProductName, category.ProductImg)}>DETAILS</CustomButton>
                    </div>

                ))}
            </div>
            <a href="/ShopPage">
                <Button variant="outline-primary"><i class="fa fa-search" aria-hidden="true"></i>View All Deals</Button>{' '}
            </a>
        </>
    )
}
export default Deal