import React from 'react'
import FooterLinks from '../footerlinks/footerlinks'
import './footer.scss'

const Footer = () => {

    return (

        <>
            <div className='footer'>
                <div className='footerOne'>
                    <div className='aboutFooter'>
                        <div className='titleone'>
                            ABOUT US
                        </div>
                        <a href="/aboutus">
                            <div className='footerContentab'> We are at cardingdrill vendors from Hansa Market Place</div>
                        </a>
                        <a href="/aboutus">
                            <div className='footerContentab'> We sucesfully deliver over 1700+ oders with 98% positive review </div>
                        </a>
                        <a href="/aboutus">
                            <div className='footerContentab'> We have extensive knowledge and experience in dealing with delivering a wide range of services to our clients</div>
                        </a>
                        <a href="/aboutus">
                            <div className='footerContentab'> Read More...</div>
                        </a>
                    </div>
                    <div className='rulesFooter'>
                        <div className='titleone'>
                            RULES AND OUR TERMS
                        </div>
                        <a href="/termsofservice">
                            <div className='footerContent'>
                                TERMS OF SERVICES
                            </div>
                        </a>
                        <a href="/privacypolicy">
                            <div className='footerContent'> PRIVACY TERMS</div>
                        </a>
                        <a href="/coockiepolicy">
                            <div className='footerContent'>COOKIES ON OUR SITE</div>
                        </a>
                        <a href="/aboutus">
                            <div className='footerContent'>ABOUT US</div>
                        </a>
                        <a href="/aboutus">

                        </a>
                        <a href='/help'>
                            <div className='footerContent'> VENDOR TERMS</div>
                        </a>

                     
                    </div>

                    <div className='helpFooter'>
                        <div className='titleone'>
                            HELP AND SUPPORT
                        </div>
                        <a href='/help'>
                            <div className='footerContent'> HELP</div>
                        </a>
                        <a href='/help'>
                            <div className='footerContent'>FAQS</div>
                        </a>

                        <a href='/contactus'>
                            <div className='footerContent'>CONTACT US</div>
                        </a>
                        <a href='/authenticreviews'>
                            <div className='footerContent'> CUSTOMER-REVIEWS</div>
                        </a>

                        <div className='footerContent'> OUR TEAM + VENDORS</div>
                    </div>
                    <div className='officialFooter'>
                        <div className='titleone'>
                            OFFICIAL ICQ TELEGRAM
                        </div>
                        <div className='footerContent'> <img id="flower" alt="Qries" src="https://cardingbird.com/wp-content/uploads/2020/10/ICQ-CashoutEmpire-1-100x100.png" />@log_master</div>
                        <div className='footerContent'><i className="fa fa-telegram fafooter" aria-hidden="true"></i>@log_master</div>
                        <div className='footerContent'>NOTE:we also have an invite only<br /> telegram group chat reserved for<br /> our "paid customers"</div>

                    </div>
                </div>
                <div className='Footertwo'>
                    <div className='Footertime'>
                        2021 cardingdrill.com
                    </div>
                    <div className='Footertlogo'>
                        <i class="fa fa-btc" aria-hidden="true"></i>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Footer