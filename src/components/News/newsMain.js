import React from 'react';
import './news.scss'
import News from "../News/News.js"


const NewsCarousel = () => (
    <div className='title'>
        <div className="head">
            <i className="fas fa-expand-alt"></i>
            <p id='heading'>News</p>
        </div>
<News/>

 </div>

)
export default NewsCarousel