import React from 'react';
import Video from '../assets/video.mp4'
import './vid.scss'

const VideoArea = () => (
    <div className='vid'>
    <video autoPlay loop muted>
        <source src={Video} type='video/mp4' />
        </video>
        <div className='vidContent'>
            <p id="hansa" className='sameColor'>We Are Hansa Vendor</p>
            <p id='carding' className='sameColor'>@CARDINGBIRD</p>
            <p id='over' className='sameColor'>Over 1600+ Sales On Hansa Market</p>
            <button className='sameColor browseButton'><i className="fa fa-shopping-bag" aria-hidden="true"></i>BROWSE NOW</button>
        </div>
    </div>
)
export default VideoArea
