import React, { useContext, useState } from 'react'
import { ProductContext } from "../Data/CategoryContents/todayDeals.js"
import './shop.scss'
import SideNav from "../../components/todayDeal/NavBar"
import ReactPaginate from "react-paginate"
import { useHistory } from "react-router-dom";
import CustomButton from '../custombutton/custombutton'
import Spinner from 'react-bootstrap/Spinner'

const BurnersCellAuatralia = () => {
    const { product } = useContext(ProductContext)
    console.log(product)
    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 6
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(product.length / itemsPerPage)
    const pageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    const click = (...props) => {
        let notifiedRoom = {
            name: props.[2],
            image: props.[3],
            price: props.[0],
            description: props.[1]
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
            <div className="Shop">
                <SideNav />
                <div className='wrap'>
                    <div className='productsContainer'>
                        {product.length === 0 && <div><Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner></div>}
                        {product.filter(name => name.category.includes('Cell')).filter(name => name.country.includes('australia')).slice(pagesVisited, pagesVisited + itemsPerPage).map(category => (


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
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        pageCount={pageCount}
                        onPageChange={pageChange}
                        containerClassName={'paginate'}
                        previousLinkClassName={'previous'}
                        nextLinkClassName={'next'}
                        disabledClassName={'disabled'}
                        activeClassName={'active'}
                    />
                </div>

            </div>

        </>
    )
}
export default BurnersCellAuatralia

