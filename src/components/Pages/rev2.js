import React, { useContext } from 'react'

import { ReviewContext } from "../Data/CategoryContents/reviews"
import "./rev2.scss"
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'

const Rev2 = () => {
    const { product } = useContext(ReviewContext)



    return (

        <>

            <div className='reviews'>
                <div className="head">

                    <p id='heading'>CUSTOMER FEEDBACK</p>
                </div>
                <div className="reviewContainer">
                    {product.length === 0 && <div><Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></div>}
                    {product.map(category => (


                        <div className='reviewCards ' key={category.ProductsID}>

                            <div className='reviewImg'>
                                <img className="subbImage" src={category.ProductImg} alt="not found" />
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



