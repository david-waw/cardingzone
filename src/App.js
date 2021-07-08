import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage'
import AddProducts from './components/AddProducts/AddProducts.js'
import AddCategory from './components/AddCategory/AddCategory.js'
import Blog from './components/Pages/blog'
import ShopPage from './components/todayDeal/ShopPage.js'
import About from "./components/Pages/About"
import Authentic from "./components/Pages/authentic"
import VendorTerms from './components/Pages/vendorTerms'
import BankDrops from './components/Pages/bankdrops'
import { connect } from 'react-redux';
import Barners from "./components/Pages/Barners"
import FakeId from "./components/Pages/fakeid"
import CardedGiftCards from './components/Pages/cardedGiftcards'
import CardedProducts from './components/Pages/cardedProducts'
import Mentorship from "./components/Pages/mentorship"
import Products from "./components/Pages/product"
import cashApp from "./components/Pages/cashApp"
import Groupon from "./components/Pages/gropon"
import CounterfitItems from "./components/Pages/counterfitItems.js"
import DebitCreditCards from "./components/Pages/debitcreditcards"
import DepositCheques from "./components/Pages/depositCheques"
import Dumps from './components/Pages/Dumps'
import Emv from './components/Pages/emv'
import Help from './components/Pages/help'
import Faqs from "./components/Pages/faq"
import Contact from "./components/Pages/contact"
import TermsOfService from "./components/Pages/TermsOfService"
import CoockiePolicy from "./components/Pages/coockiepolicy"
import SignInAndSignUpPage from "./components/Pages/sign-in-aign-up.js"
import  Privacy from "./components/Pages/privacy"
import Header from './components/header/header.js'
import AddNews from './components/AddNews/AddNews'
import { Switch, Route, Redirect } from "react-router-dom";
import {CategoryContextProvider} from './components/Data/CategoryContents/CategoryContents.js'
import { ProductContextProvider } from './components/Data//CategoryContents/todayDeals.js'
import { NewsContextProvider} from "./components/Data/CategoryContents/news.jsx"
import Navbar from './components/todayDeal/Navbar2'
import { auth, createUserProfileDocument } from './components/Config/config';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
  userRef.onSnapshot(snapShot => {
  setCurrentUser({
        id: snapShot.id,
        ...snapShot.data()
    
          });
  });
      
      }
setCurrentUser(userAuth)
    });
      }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    
      <NewsContextProvider>
   <ProductContextProvider>
          <CategoryContextProvider>
            <div>
              <Navbar />
            <Switch>
              <Route exact path='/' component={HomePage} />
                <Route exact path='/aboutus' component={About} />
                <Route exact path='/authenticreviews' component={Authentic} />
                <Route exact path='/vendorterms' component={VendorTerms} />
                <Route exact path='/bankdrops' component={BankDrops} />
               <Route exact path='/signin' render  render={() =>this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } />
             <Route exact path='/product' component={Products} />
               <Route exact path='/cardedegiftcards' component={CardedGiftCards} />
                <Route exact path='/cardedeproducts' component={CardedProducts} />
                <Route exact path='/cashapp' component={cashApp} />
                <Route exact path='/ShopPage' component={ShopPage} />
                <Route exact path='/counterfititems' component={CounterfitItems} />
               <Route exact path='/creditdebitcards' component={ DebitCreditCards} />
                <Route exact path='/depositcheques' component={DepositCheques} />
                <Route exact path='/dumps' component={Dumps} />
                <Route exact path='/emvchipsoftware' component={Emv} />
                <Route exact path='/fakeId' component={FakeId} />
                <Route exact path='/groupon' component={Groupon} />
                 <Route exact path='/mentershipandcoaching' component={Mentorship} />
                  <Route exact path='/help' component={Help} />
                <Route exact path='/faqs' component={Faqs} />
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/vendorterms' component={VendorTerms} />
                <Route exact path='/termsofservice' component={TermsOfService} />
                <Route exact path='/privacypolicy' component={Privacy} />
                <Route exact path='/coockiepolicy' component={CoockiePolicy} />
                <Route exact path='/blog' component={Blog} />
          <Route exact path='/AddProducts' component={AddProducts} />
            <Route exact path='/AddCategory' component={AddCategory} />
            <Route exact path='/AddNews' component={AddNews}/>
      </Switch>
         </div>
    
        </CategoryContextProvider> 
    
     </ProductContextProvider>
     
      </NewsContextProvider>
    
     
    
    
  )
  
   } 
 
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
