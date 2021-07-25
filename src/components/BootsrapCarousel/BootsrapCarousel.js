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
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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