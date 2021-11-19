
import React, { useContext } from 'react'
import { ReviewContext } from "../Data/CategoryContents/reviews"
import './reviews.css'
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'


const Review = () => {
    const { product } = useContext(ReviewContext)
        (product)


    return (

        <>

            <div className='reviews'>
                <div className="head">
                    <i className="fas fa-expand-alt"></i>
                    <p id='heading'>TOP VERIFIRD REVIEWS</p>
                </div>
                <div className="reviewContainer">
                    {product.length === 0 && <div><Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></div>}
                    {product.slice(0, 3).map(category => (


                        <div className='reviewCard' key={category.ProductsID}>

                            <div className='reviewImg'>
                                <img className="subbImage1" src={category.ProductImg} alt="not found" />
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
                <div className='reviewBurrons'>
                    <a href="/AddReviews">
                        <Button className="rev111" variant="outline-primary">   <i class="fa fa-star" aria-hidden="true"></i>Leave a review</Button>{' '}
                    </a>
                    <a href="/authenticreviews">
                        <Button className="rev111" variant="outline-primary"><i class="fa fa-play" aria-hidden="true"></i>View All Reviews</Button>{' '}
                    </a>
                </div>

            </div>

        </>
    )
}
export default Review