import React from 'react';
import './code.scss'
import './code.css'
const Code = () => (
    <div>
        <div className='deals'>
            <div className='title'>
                <div className="head">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    <p id='heading'>OUR CODE OF BUSINESS</p>
                </div>
            </div>
            <div id='Code'>
                <div className='code'>
                    <div>
                        <i class="fa fa-user-secret" aria-hidden="true"></i>
                    </div>
                    <div className='description'>
                        YOUR PRIVACY IS GUARANTEED
                    </div>
                    <div>
                        At "cardingdrill.com" we have built secure data collection,processing and service delivery system to keep your private information private
                    </div>
                </div>
                <div className='code'>
                    <div>
                        <i class="fa fa-codiepie" aria-hidden="true"></i>
                    </div>
                    <div className='description'>
                        ANONYMUS CRYPTO PAYMENTS
                    </div>
                    <div>
                        we accept payments in crypto currencies such as bitcoin as well as monero to give maximum anonimity and protection for our customers all around the world
                    </div>
                </div>
                <div className='code'>
                    <div>
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                    </div>
                    <div className='description'>
                        AFTER SALES SUPPORT
                    </div>
                    <div>
                        In our line of work some things can go wrong.however we provide free after sales support to our customers for complete peace of mind
                    </div>
                </div>

            </div>

        </div>
    </div>

)
export default Code