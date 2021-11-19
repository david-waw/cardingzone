import React from 'react';
import Video from '../assets/video.mp4'
import './vid.scss'
import { useHistory } from "react-router-dom";


function VideoArea() {
    const history = useHistory();

    function handleClick() {
        history.push("/ShopPage");
    }

    return (
        <>
            <div className='vid'>
                <video autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
                <div className='vidContent'>
                    <p id="hansa" className='sameColor'>We Are Hansa Vendor</p>
                    <p id='carding' className='sameColor'>@cardingzone</p>
                    <p id='over' className='sameColor'>Over 1600+ Sales On Hansa Market</p>
                    <button className='sameColor browseButton' onClick={handleClick}><i className="fa fa-shopping-bag" aria-hidden="true"></i>BROWSE NOW</button>
                </div>
            </div>
        </>
    );
}

export default VideoArea
