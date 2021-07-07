import React from 'react';
import VideoArea from '../vid/vid'
import CategoryCarousel from '../CategoryCarousel/CategoryCarousel.js'
import Deals from '../Deals/Deals.js'
import Code from '../Code/Code'
import NewsCarousel from '../News/newsMain'

const HomePage = () => (
    <div className='homepage'>
        <VideoArea />
        <CategoryCarousel/>
        <Deals />
        <Code />
        <NewsCarousel/>
    </div>
)
export default HomePage