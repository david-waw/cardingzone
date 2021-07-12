import React, { Component } from 'react'
import { CategoryContext } from "../Data/CategoryContents/CategoryContents.js"
import './BootsrapCarousel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

export class BootsrapCarousel extends Component {
  static contextType = CategoryContext
 
 
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000,
            cssEase: "linear"
      };
      const { category } = this.context
     
      return (

          <div id='productCard'>
          <Slider {...settings}>
          {category.map(category => (
            
              <a href= {category.category}>
              <div className='product-card' key={category.CategoryID}>
                  <div className='product-img'>
                      <img className="img" src={category.ProductImg} alt="not found" />
                  </div>
                  <div className='product-name'>
                      {category.category}
                  </div>
               
                
              </div>
            </a>
          


          ))}
        </Slider>
          </div>
        
        )

    }

}



export default BootsrapCarousel