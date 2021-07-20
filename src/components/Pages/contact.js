import React from 'react';
import "./contact.scss"
import background from "../assets/contact.jpg";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Contact() {
  return (
    <>
      <div className="contactContainer">
      <div className="contactHead" style={{ backgroundImage: `url(${background})` }}>
        <h2 className="contactTitle" >CONTACT US!</h2>
        <p className="contactSub" ><span >You must use PGP when contacting us, any messages that are send in plain text will be deleted and ignored.</span></p>
        <CardGroup>
  
  <Card>
            <Card.Img />
            <i className="fa fa-question-circle contactIcon" aria-hidden="true"></i>
    <Card.Body>
      <Card.Title>READ OUT FAQS</Card.Title>
      <Card.Text>
      
              </Card.Text>
              <p><span >Before you contact, visit&nbsp;our <>Help &amp; Support </>page to see the most commonly asked questions.</span></p>
<p ><span >If you’re still unable to find the answer then please write to us, you must use the PGP Key. Understandably, we are unable to reply to messages sent in plain text therefore, they will be ignored &amp; erased.&nbsp;</span></p>
    </Card.Body>
    <Button href="/help">Help And Support</Button> 
  </Card>
  <Card>
            <Card.Img/>
            <i className="fa fa-comments contactIcon" aria-hidden="true"></i>
    <Card.Body>
      <Card.Title>CONTACT SUPPORT</Card.Title>
      <p ><span >Sometimes we all need a little extra TLC but <strong>you must understand that we are very busy</strong> doing our work. </span></p>
<p><span>We’re always here to support you in case of a problem with your order, however; do not ask us for discounts as they are only reserved for regulars and not for first time buyers, if you cant afford it please move on.</span></p>
    </Card.Body>
    <Button href="#">Contact Us</Button> 
  </Card>
          </CardGroup>
          
        </div>
       
       
      </div>
      <div className="otherContent">
        <h2 className="kaheading">BEFORE YOU CONTACT US</h2>
        <h2 className="kasubheading"> HAVE YOU READ OUR FAQ’s?</h2>
        <div className="someContents">
        <p>Please do NOT send us multiple emails for the same query, we are a team and busy at all times if you have already contacted our support and did not get a satisfactory answer you can contact here at </p>
<blockquote>
<p>mqcgnvhfux9wa [at] protonmail.com</p>
</blockquote>
<p>We will respond to you as soon as conveniently possible, we are open and working 24/7/365 to help you with your orders.</p>
       </div>
      </div>
      <div className="companyDetails">
      <h2 className="compantTitle"> COMPANY DETAILS</h2>
<p> CARDING BIRD</p>
<p>HELPING YOU MAKE MONEY SINCE THE DEATH OF HANSA MARKET</p>
      </div>
     
    </>
  );
}