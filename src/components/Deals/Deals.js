import React from 'react';
import Deal from "../todayDeal/todayDeal.js"

const Deals = () => (
    <div className='deals'>
     <div className='title'>
        <div className="head">
        <i className="fa fa-clock-o" aria-hidden="true"></i>
            <p id='heading'>TODAY'S DEALS</p>
        </div>
        </div>
        <Deal/>
        </div>
        
)
export default Deals