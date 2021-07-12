import React, { Component } from 'react'
import { NewsContext } from "../Data/CategoryContents/news.jsx"
import './news.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class News extends Component {
  static contextType = NewsContext
 
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000,
            cssEase: "linear"
      };
      const { news } = this.context
    console.log(news)
      return (

          <div id='productCard'>
          <Slider {...settings}>
          {news.map(category => (
              
                    
              <div className='productcard' key={category.CategoryID}>
              <div className='category'>
                      {category.category}
                  </div>
                  <div className='productname'>
                      {category.ProductName}
                  </div>
                  <div className='productimg'>
                      <img className="Img" src={category.ProductImg} alt="not found" />
                  </div>
                 
                 
                 
               
                
              </div>


          ))}
        </Slider>
          </div>
        
        )

    }

}



export default News