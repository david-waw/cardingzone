import React from 'react';
import Button from 'react-bootstrap/Button'
import "./About.scss"
export default function About() {
  return (
    <>
      <div className="aboutCont">
        <h2><span ><strong><span >#. WHO ARE WE?</span></strong></span></h2>
        <p><span>We are<strong> cardingdrill Vendor</strong>&nbsp;based somewhere in Utah <strong>from Hansa Marketplace</strong>, we successfully delivered over <strong>1,500+ orders with 97% Positive Reviews</strong> from our customers.</span></p>
        <p><span>We have <strong>extensive knowledge &amp; experience</strong> in dealing with and delivering a <strong>wide range of services</strong> to our clients.</span></p>
        <p><span ><span >Since the <strong>Hansa Market went down </strong>we decided to work independently so we created this site </span><span >to serve our<strong> existing client base and to acquire clients</strong> for our services in the process.</span></span></p>
        <p><span >We take a <strong>great deal of care</strong> in <strong>serving our existing clients</strong> and provide basic &amp; limited support to our potentially new clients.</span></p>
        <p><span>For beginners, however, we do provide a range of mentoring services <strong>from 5 days all the way up to 2 weeks</strong> they usually involve all the tools (bells and whistles) that are needed to perform those tasks, please check the ad of the service you are interested in and read the details of such service.</span></p>
        <p><span>We currently have no plans of returning to any dark-net marketplace, sooner or later they will eventually go down and this seems to be the norm and never-ending cycle.</span></p>
        <blockquote><p><span ><strong>We have invested heavily in our infrastructure to serve our client base directly from our site.</strong></span></p></blockquote>
        <p><span>On our endnote,<strong> we welcome everyone who is serious about putting in the hard work to make cash</strong>, remember <strong>our services are NOT an all-in-one solution for you to make money</strong>, just like everything else in life <strong>you will be required to put in the work for the service you will acquire before you will be able to get that cash</strong>.</span></p>
        <h2><span><strong><span >#. </span></strong><span><strong><span >ARE YOU A VENDOR AND WANNA WORK TOGETHER?</span></strong></span></span></h2>
        <p><span >We also <strong>welcome our fellow Hansa Market as well as other vendors</strong> to partner up with us in serving our existing clients, so if you were or are a vendor on any Market who would like to sell your services to our client base you must first read <strong>“<span ><a href="/help/">Third Party Vendors</a></span>“</strong> section in the Terms of our Services and if you are still interested you can get in touch with a complete list of your services and pricing.</span></p>
        <p><span><strong>Happy Carding!</strong></span></p>
        <p>cardingdrill Team</p>
        <div className="buttonsgroup">
          <Button className="buttonsgroups" href="./cardedproducts/apple iphones"><i class="fa fa-shopping-cart" aria-hidden="true"></i>View all Iphones</Button>
          <Button className="buttonsgroups" href="./authenticreviews"><i class="fa fa-star" aria-hidden="true"></i>Read Our Reviews</Button>
          <Button className="buttonsgroups" href="./termsofservice"><i class="fa fa-play" aria-hidden="true"></i>Service Terms</Button>
        </div>
      </div>

    </>
  );
}