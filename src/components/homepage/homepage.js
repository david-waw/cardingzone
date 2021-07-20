import React from 'react';
import VideoArea from '../vid/vid'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel.js'
import Review from '../Reviews/reviews.js'
import Deals from '../Deals/Deals.js'
import Code from '../Code/Code'


const HomePage = () => (
    <div className='homepage'>
        <VideoArea />
        <CategoryCarousel/>
        <Deals />
        <Code />
        <Review/>
      
    </div>
)
export default HomePage