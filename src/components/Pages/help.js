import React from 'react';
import "./help.scss"
import bird from '../assets/favicon.jpg';
import Accordion from './accordion'
import Accordion1 from './accordion1'
import Accordion2 from './accordion2'


export default function Help() {
  return (
    <>
      <h1 className='help'>Help & Support</h1>
      <h1 className='helpSub'>
        <p className="paragraph">
          Here you will find access to helpful material
          </p>
          <p className="paragraph">
          to understand hou our site works
        </p>
        <p className="paragraph">
            and you can find the most out of it
        </p>   
      </h1>
      <div className="helpDiv">
      <div className='helpPage'>
        <div className="subHelp">
          <i class="fa fa-hand-paper-o" aria-hidden="true"></i>
          <p className="subHelpTitle">One Stop Shop</p>
          we are your one stop shop for all the fraud items you need to make $$$
          we dont just sell this our team uses all these tools to generate $$$
          on a daily basis we are a team of experienced individuals
        </div>
        <div className="subHelp">
          <i class="fa fa-desktop" aria-hidden="true"></i>
          <p className="subHelpTitle">Total Control</p>
          unlike Hansa Market we control everything in our site here,
          we resolve the issues if they arise and take action where it needs to be taken
          
          </div>
      </div>
      <div className='helpPage'>
   <img src={bird} alt="Logo" />;
      </div>
      <div className='helpPage2'>
      <div className="subHelp">
          <i class="fa fa-star-o" aria-hidden="true"></i>
          <p className="subHelpTitle">Clean Vendors</p>
          We vet all of our vendors before working with them to provide services close to drop your adress you
          are buying directly from us under out guarantee
        </div>
        <div className="subHelp">
          <i class="fa fa-share-alt" aria-hidden="true"></i>
          <p className="subHelpTitle">Share the love</p>
          We love sharing useful news and helpful articles to help you archive your goals
          because we archieve ours everyday
          
          </div>
        </div>
      </div>
      <div className="head">
            <i className="fas fa-expand-alt"></i>
        <p id='heading'>OUR FAQS</p>
        </div>
      <Accordion />
      <Accordion1 />
      <Accordion2 />
      
    
    </>
  );
}