import React from 'react';
import './CategoryCarousel.scss'
import BootsrapCarousel from "../BootsrapCarousel/BootsrapCarousel.js"


const CategoryCarousel = () => (
    <div className='title'>
        <div className="head">
            <i className="fas fa-expand-alt"></i>
            <p id='heading'>CATEGORIES</p>
        </div>
<BootsrapCarousel/>

 </div>

)
export default CategoryCarousel