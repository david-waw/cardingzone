import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage'
import AddProducts from './components/AddProducts/AddProducts.js'
import AddReviews from './components/AddCategory/AddNews.js'
import AddCategory from './components/AddCategory/AddCategory.js'
import Blog from './components/Pages/blog'
import ShopPage from './components/todayDeal/ShopPage.js'
import About from "./components/Pages/About"
import Authentic from "./components/Pages/authentic"
import VendorTerms from './components/Pages/vendorTerms'
import { connect } from 'react-redux';
import Barners from "./components/Pages/Barners"
import FakeId from "./components/Pages/fakeid"
import CardedGiftCards from './components/Pages/cardedGiftcards'
import CardedProducts from './components/Pages/cardedProducts'
import Mentorship from "./components/Pages/mentorship"
import Products from "./components/Pages/product"
import DropsBelgium from "./components/Pages/bankdropsbelgium"
import BankGermany from "./components/Pages/bankdropsgermany"
import BankGermanyN26 from "./components/Pages/bankdropsgermanyn26"
import BankIreland from "./components/Pages/bankdropsireland"
import BankIrelandN26 from "./components/Pages/bankdropsirelandN26"
import UlsterBank from "./components/Pages/bankdropsirelandUlster"
import BankNetherlands from "./components/Pages/bankdropsnetherlands"
import BankDrops from "./components/Pages/bankdrops"
import DropsFrance from "./components/Pages/bankdropsfrance"
import HSBCFrance from "./components/Pages/bankdropsfrancehsbc"
import N2France from "./components/Pages/bankdropsfrancen2"
import N2Netherlands from "./components/Pages/bankdropsnetherlandsn2"
import DropsUSA from "./components/Pages/bankdropsusa"
import DropsUSACapital from "./components/Pages/bankdropsusacapital"
import DropsUSAChyme from "./components/Pages/bankdropsusachyme"
import DropsUSAChase from "./components/Pages/bankdropsusachase"
import BankUsaCurrent from "./components/Pages/bankdropsusacurrent"
import DropsUSAGo from "./components/Pages/bankdropsusagp"
import DropsUSAGreen from "./components/Pages/bankdropsusagreen"
import DropsUSAHSBC from "./components/Pages/bankdropsusahsbc"
import DropsUSAN26 from "./components/Pages/bankdropsusan26"
import DropsUSAExpress from "./components/Pages/bankdropsusaexpress"
import DropsUSASun from "./components/Pages/bankdropsusasun"
import DropsUSAMoney from "./components/Pages/bankdropsusamoney"
import DropsUSAVmeo from "./components/Pages/bankdropsusavmeo"
import DropsUk from "./components/Pages/bankdropsuk"
import DropsUkHsbc from "./components/Pages/bankdropsukhsbc"
import DropsTmobile from "./components/Pages/bankdropsuktmobile"
import DropsUlster from "./components/Pages/bankdropsukulster"
import BTCWORLD from "./components/Pages/btcworld"
import Burners from "./components/Pages/burners"
import BurnersCell from "./components/Pages/burnerscell"
import BurnersCellAfrica from "./components/Pages/burnerscellafrica"
import BurnersCellAsia from "./components/Pages/burnerscellasia"
import BurnersCellAustralia from "./components/Pages/burnerscellaustralia"
import BurnersCellCanada from "./components/Pages/burnerscellcanada"
import BurnersCellNewz from "./components/Pages/burnerscellnewz"
import BurnersCellUs from "./components/Pages/burnerscellus"
import BurnersCellUk from "./components/Pages/burnerscelluk"
import BurnersCellEurope from "./components/Pages/burnerscelleurope"
import BurnersSim from "./components/Pages/burnerssim"
import CD from "./components/Pages/CD"
import CDAustralia from "./components/Pages/CDA"
import CDAustraliaRandom from "./components/Pages/CDAR"
import CDAustraliaVisa from "./components/Pages/CDAV"
import CDCanada from "./components/Pages/CDC"
import CDCanadaRandom from "./components/Pages/CDCR"
import CDCanadaVisa from "./components/Pages/CDCV"
import CDUk from "./components/Pages/CDUk.js"
import CDUkRandom from "./components/Pages/CDUkR"
import CDUkVisa from "./components/Pages/CDUkV"
import CDUs from "./components/Pages/CDUs"
import CDUsRandom from "./components/Pages/CDUsR.js"
import CDUsVisa from "./components/Pages/CDUsV"
import CDUsExpress from "./components/Pages/CDUsE"
import CDUsDiscover from "./components/Pages/CDUsD"

import CDFrance from "./components/Pages/CDF"
import CDFranceRandom from "./components/Pages/CDFR"
import CDFranceVisa from "./components/Pages/CDFV"


import CDIndia from "./components/Pages/CDI"
import CDIndiaRandom from "./components/Pages/CDIR"
import CDIreland from "./components/Pages/CDIre"
import CDIrelandRandom from "./components/Pages/CDIreR"
import CDNewz from "./components/Pages/CDNz"
import CDNewzRandom from "./components/Pages/CDNzR"
import CDDubai from "./components/Pages/CDD"
import CDDubaiRandom from "./components/Pages/CDDR"


import Fake from "./components/Pages/Face"
import FakeUs from "./components/Pages/FaceUs"
import FakeUk from "./components/Pages/FaceUk"
import FakeIreland from "./components/Pages/FaceIr"
import FakeNewz from "./components/Pages/FaceNewz"
import FakeFrance from "./components/Pages/FaceFrance"
import FakeCanada from "./components/Pages/FaceCanada"
import FakeAustralia from "./components/Pages/FaceAustralia"

import FraudContacts from "./components/Pages/FraudContact.js"

import Genesis from "./components/Pages/Genesis.js"

import Groupon from "./components/Pages/Groupon.js"


import Deposit from "./components/Pages/Depo"



import BurnersSimIreland from "./components/Pages/burnerssim1"
import BurnersSimKenya from "./components/Pages/burnerssim2"
import BurnersSimUs from "./components/Pages/burnerssim3"
import BurnersUk from "./components/Pages/burnerssim4"
import BurnersSimMoroko from "./components/Pages/burnerssim5"
import BurnersSimNiger from "./components/Pages/burnerssim6"
import BurnersSimSa from "./components/Pages/burnerssim7"
import BurnersSimIndia from "./components/Pages/burnerssim8"
import BurnersSimGhana from "./components/Pages/burnerssim9"
import BurnersSimGermany from "./components/Pages/burnerssim10"
import BurnersSimFrance from "./components/Pages/burnerssim11"
import BurnersSimEgypt from "./components/Pages/burnerssim12"
import BurnersSimCanada from "./components/Pages/burnerssim13"
import BurnersSimAustralia from "./components/Pages/burnerssim14"
import BurnersSimAlgeria from "./components/Pages/burnerssim15"
import Carded from "./components/Pages/burnerssim16"
import CardedAustralia from "./components/Pages/burnerssim17"
import CardedCanada from "./components/Pages/burnerssim18"
import CardedUs from "./components/Pages/burnerssim19"
import CardedUk from "./components/Pages/burnerssim20"
import AppleWatch from "./components/Pages/card25"
import CardProducts from "./components/Pages/card1"
import CardProductsWorldwide from "./components/Pages/card2"
import CardProductsairpods from "./components/Pages/card3"
import CardProductsApple from "./components/Pages/card4"
import CardProductsIpads from "./components/Pages/card5"
import CardProductsSumsang from "./components/Pages/card6.js"
import Iphones from "./components/Pages/card7"
import CardProductsumsangsmartphone from "./components/Pages/card8"
import CashApp from "./components/Pages/cash.js"
import CashAppUk from "./components/Pages/cash1.js"
import CashAppUs from "./components/Pages/cash2.js"
import Counter from "./components/Pages/counter"
import CounterEu from "./components/Pages/countereu.js"
import CounterUk from "./components/Pages/counteruk"
import CounterUs from "./components/Pages/counterus"
import AustralianDump from "./components/Pages/dump1"
import CounterfitItems from "./components/Pages/counterfitItems.js"
import DebitCreditCards from "./components/Pages/debitcreditcards"
import ThirdFirst from "./components/Pages/bankbelgiumn26"
import DepositCheques from "./components/Pages/depositCheques"

import CanadaDump from "./components/Pages/dump2"
import DenmarkDump from "./components/Pages/dump3"
import UsDump from "./components/Pages/dump4"
import UkDump from "./components/Pages/dump5"
import Dump from "./components/Pages/dump6"
import FranceDump from "./components/Pages/dump7"


import SFH from "./components/Pages/sfh"
import DD from "./components/Pages/dd"
import Spam from "./components/Pages/spam"
import Ransom from "./components/Pages/ransom"
import Bot from "./components/Pages/bot"


import Soft from "./components/Pages/soft"
import Emv from "./components/Pages/emv"
import Anti from "./components/Pages/anti"
import Dark from "./components/Pages/dark"
import Fraud from "./components/Pages/fraud"

import PP from "./components/Pages/pp"

import M from "./components/Pages/mm"
import MCash from "./components/Pages/mcash"
import MP from "./components/Pages/mp"
import MV from "./components/Pages/mv"
import MCard from "./components/Pages/mcard.js"
import MD from "./components/Pages/md.js"

import SSNUk from "./components/Pages/SSNUk"
import SSNA from "./components/Pages/SSNA"
import SSNUs from "./components/Pages/SSNUs"
import SSNN from "./components/Pages/SSNN"
import Western from "./components/Pages/western"
import Venmo from "./components/Pages/venmo"
import SSNC from "./components/Pages/SSNC"
import Checkout from "./components/checkoutpage/checkoutpage"

import Help from './components/Pages/help'
import Faqs from "./components/Pages/faq"
import Contact from "./components/Pages/contact"
import TermsOfService from "./components/Pages/TermsOfService"
import CoockiePolicy from "./components/Pages/coockiepolicy"
import SignInAndSignUpPage from "./components/Pages/sign-in-aign-up.js"
import Privacy from "./components/Pages/privacy"
import Footer from "./components/footer/footer"
import AddNews from './components/AddNews/AddNews'
import { Switch, Route, Redirect } from "react-router-dom";
import { CategoryContextProvider } from './components/Data/CategoryContents/CategoryContents.js'
import { ReviewContextProvider } from './components/Data/CategoryContents/reviews'
import { ProductContextProvider } from './components/Data//CategoryContents/todayDeals.js'
import { NewsContextProvider } from "./components/Data/CategoryContents/news.jsx"
import Navbar from './components/todayDeal/Navbar2'
import { auth, createUserProfileDocument } from './components/Config/config';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
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
  render() {
    return (
      <ReviewContextProvider>
        <NewsContextProvider>
          <ProductContextProvider>
            <CategoryContextProvider>
              <div>
                <Navbar />
                <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/aboutus' component={About} />
                  <Route exact path='/AddReviews' component={AddReviews} />
                  <Route exact path='/bankdrops/belgium' component={DropsBelgium} />
                  <Route exact path='/cardedproducts/apple/watch' component={AppleWatch} />
                  <Route exact path='/bankdrops/belgium/N26' component={ThirdFirst} />
                  <Route exact path='/bankdrops/france/HSBC' component={HSBCFrance} />
                  <Route exact path='/bankdrops/ireland' component={BankIreland} />
                  <Route exact path='/bankdrops/ireland/N26' component={BankIrelandN26} />
                  <Route exact path='/bankdrops/ireland/Ulster Bank' component={UlsterBank} />
                  <Route exact path='/bankdrops/netherlands' component={BankNetherlands} />
                  <Route exact path='/bankdrops/netherlands/N26' component={N2Netherlands} />
                  <Route exact path='/bankdrops/usa' component={DropsUSA} />
                  <Route exact path='/bankdrops/usa/capitalone' component={DropsUSACapital} />
                  <Route exact path='/bankdrops/usa/chyme' component={DropsUSAChyme} />
                  <Route exact path='/bankdrops/usa/chase' component={DropsUSAChase} />
                  <Route exact path='/bankdrops/usa/gobank' component={DropsUSAGo} />
                  <Route exact path='/bankdrops/usa/greendot' component={DropsUSAGreen} />
                  <Route exact path='/bankdrops/usa/hsbc' component={DropsUSAHSBC} />
                  <Route exact path='/bankdrops/usa/n26' component={DropsUSAN26} />
                  <Route exact path='/bankdrops/usa/america express' component={DropsUSAExpress} />
                  <Route exact path='/bankdrops/usa/suntrust' component={DropsUSASun} />
                  <Route exact path='/bankdrops/usa/t mobile money' component={DropsUSAMoney} />
                  <Route exact path='/bankdrops/usa/vmeno' component={DropsUSAVmeo} />
                  <Route exact path='/bankdrops/uk' component={DropsUk} />
                  <Route exact path='/bankdrops/uk/hsbc' component={DropsUkHsbc} />
                  <Route exact path='/bankdrops/uk/tmobile' component={DropsTmobile} />
                  <Route exact path='/bankdrops/uk/ulsterbank' component={DropsUlster} />
                  <Route exact path='/btcworld' component={BTCWORLD} />
                  <Route exact path='/burners' component={Burners} />
                  <Route exact path='/burners/cellphones' component={BurnersCell} />
                  <Route exact path='/burners/cellphones/africa' component={BurnersCellAfrica} />
                  <Route exact path='/burners/cellphones asia' component={BurnersCellAsia} />
                  <Route exact path='/burners/cellphones/australia' component={BurnersCellAustralia} />
                  <Route exact path='/burners/cellphones/canada' component={BurnersCellCanada} />
                  <Route exact path='/burners/cellphones/europe' component={BurnersCellEurope} />
                  <Route exact path='/burners/cellphones neuzeland' component={BurnersCellNewz} />
                  <Route exact path='/burners/cellphones/us' component={BurnersCellUs} />
                  <Route exact path='/burners/cellphones/unitedkingdom' component={BurnersCellUk} />
                  <Route exact path='/burners/simcards' component={BurnersSim} />
                  <Route exact path='/burners/simcards/algeria' component={BurnersSimAlgeria} />
                  <Route exact path='/burners/simcards/australia' component={BurnersSimAustralia} />
                  <Route exact path='/burners/simcards/canada' component={BurnersSimCanada} />
                  <Route exact path='/burners/simcards/Egypy' component={BurnersSimEgypt} />
                  <Route exact path='/burners/simcards/france' component={BurnersSimFrance} />
                  <Route exact path='/burners/simcards/germany' component={BurnersSimGermany} />
                  <Route exact path='/burners/simcards/ghana' component={BurnersSimGhana} />
                  <Route exact path='/burners/simcards/india' component={BurnersSimIndia} />
                  <Route exact path='/burners/simcards/south Africa' component={BurnersSimSa} />
                  <Route exact path='/burners/simcards/Nigeria' component={BurnersSimNiger} />
                  <Route exact path='/burners/simcards/morroko' component={BurnersSimMoroko} />
                  <Route exact path='/burners/simcards/unitedkingdom' component={BurnersUk} />
                  <Route exact path='/burners/simcards/unitedstates' component={BurnersSimUs} />
                  <Route exact path='/burners/simcards/kenya' component={BurnersSimKenya} />
                  <Route exact path='/burners/simcards/ireland' component={BurnersSimIreland} />
                  <Route exact path='/cardedegiftcards' component={Carded} />
                  <Route exact path='/cardedegiftcards/Australia' component={CardedAustralia} />
                  <Route exact path='/cardedegiftcards/Canada' component={CardedCanada} />
                  <Route exact path='/cardedegiftcards/usa' component={CardedUs} />
                  <Route exact path='/cardedegiftcards/uk' component={CardedUk} />

                  <Route exact path='/cardedproducts' component={CardProducts} />
                  <Route exact path='/cardedproducts/worldwide' component={CardProductsWorldwide} />
                  <Route exact path='/cardedproducts/apple' component={CardProductsApple} />
                  <Route exact path='/cardedproducts/apple/airpods' component={CardProductsairpods} />
                  <Route exact path='/cardedproducts/Apple/ipads' component={CardProductsIpads} />
                  <Route exact path='/cardedproducts/apple iphones' component={Iphones} />
                  <Route exact path='/cardedproducts/sumsang' component={CardProductsSumsang} />
                  <Route exact path='/cardedproducts/sumsang/smartphones' component={CardProductsumsangsmartphone} />

                  <Route exact path='/cashapp' component={CashApp} />
                  <Route exact path='/cashapp/uk' component={CashAppUk} />
                  <Route exact path='/cashapp/us' component={CashAppUs} />
                  <Route exact path='/checkout' component={Checkout}/>

                  <Route exact path='/genesismarket' component={Genesis} />
                  <Route exact path='/groupon' component={Groupon} />

                  <Route exact path='/credidebit Cards' component={CD} />
                  <Route exact path='/creditdebitcardsaustralia' component={CDAustralia} />
                  <Route exact path='/creditdebitcardsaustraliarandom' component={CDAustraliaRandom} />
                  <Route exact path='/creditdebitcardsaustraliavisa' component={CDAustraliaVisa} />

                  <Route exact path='/fakeid' component={Fake} />
                  <Route exact path='/fake id australia' component={FakeAustralia} />
                  <Route exact path='/fakeidCanada' component={FakeCanada} />
                  <Route exact path='/Fakeid/france' component={FakeFrance} />
                  <Route exact path='/fakeid/ireland' component={FakeIreland} />
                  <Route exact path='/fakeid/newzealand' component={FakeNewz} />
                  <Route exact path='/fakeiduk' component={FakeUk} />
                  <Route exact path='/fakeid/usa' component={FakeUs} />

                  <Route exact path='/fraudcontacts' component={FraudContacts} />

                  <Route exact path='/dumpsaustralia' component={AustralianDump} />
                  <Route exact path='/dumps' component={Dump} />
                  <Route exact path='/dumpsCanada' component={CanadaDump} />
                  <Route exact path='/dumpdenmark' component={DenmarkDump} />
                  <Route exact path='/dumpsfrance' component={FranceDump} />
                  <Route exact path='/dumpsuk' component={UkDump} />
                  <Route exact path='/dumpsusa' component={UsDump} />

                  <Route exact path='/softwares' component={Soft} />
                  <Route exact path='/softwares/worldwide/antidetect' component={Anti} />
                  <Route exact path='/softwares/worldwide/darkweb' component={Dark} />
                  <Route exact path=' /softwares/worldwide/emv' component={Emv} />
                  <Route exact path='/softwares/worldwide/fraud' component={Fraud} />



                  <Route exact path='/ssnfullz/australia' component={SSNA} />
                  <Route exact path='/ssnfullz/canada' component={SSNC} />
                  <Route exact path='/ssnfullz/newzealand' component={SSNN} />
                  <Route exact path='/ssnfullz/us' component={SSNUs} />
                  <Route exact path='/ssnfullz/uk' component={SSNUk} />
                  <Route exact path='/venmo' component={Venmo}/>
                  <Route exact path='/westernunion' component={Western} />


                  <Route exact path='/mentershipandcoaching' component={M} />
                  <Route exact path='/advancedcarding' component={MCard} />
                  <Route exact path='/advancedcashapp' component={MCash} />
                  <Route exact path='/advanceddumps' component={MD} />
                  <Route exact path='/advancedpaypal' component={MP} />
                  <Route exact path='/advanced venmo' component={MV} />
                  <Route exact path='/paypal' component={PP} />

                  <Route exact path='/sfh' component={SFH} />
                  <Route exact path='/sfh/botnet' component={Bot} />
                  <Route exact path='/sfh/DDos attacks' component={DD} />
                  <Route exact path='/sfh/randomwareasaservice' component={Ransom} />
                  <Route exact path='/sfh/spamming' component={Spam} />







                  <Route exact path='/creditdebitcardsCanada' component={CDCanada} />
                  <Route exact path='/creditdebitcardscanadarandom' component={CDCanadaRandom} />
                  <Route exact path='/creditdebitcardscanadaliavisa' component={CDCanadaVisa} />

                  <Route exact path='/creditdebitcardsdubai' component={CDDubai} />
                  <Route exact path='/creditdebitcardsdubairandommixed' component={CDDubaiRandom} />

                  <Route exact path='/creditdebitcardsfrance' component={CDFrance} />
                  <Route exact path='/creditdebitcardsfrancerandom' component={CDFranceRandom} />
                  <Route exact path='/creditdebitcardsfranceliavisa' component={CDFranceVisa} />


                  <Route exact path='/creditdebitcardsindia' component={CDIndia} />
                  <Route exact path='/creditdebitcardsindiarandom' component={CDIndiaRandom} />
                  <Route exact path='/creditdebitcardsireland' component={CDIreland} />
                  <Route exact path='/creditdebitcardsirelandrandom' component={CDIrelandRandom} />
                  <Route exact path='/creditdebitcards/newzealand' component={CDNewz} />
                  <Route exact path='/creditdebitcards/newzealandrandom' component={CDNewzRandom} />

                  <Route exact path='/creditdebitcardsunitedkingdom' component={CDUk} />
                  <Route exact path='/creditdebitcardsunitedkingdomrandom' component={CDUkRandom} />
                  <Route exact path='/creditdebitcardsunitedkingdomliavisa' component={CDUkVisa} />

                  <Route exact path='/creditdebitcardsunitedstates' component={CDUs} />
                  <Route exact path='/creditdebitcardsunitedstatesrandom' component={CDUsRandom} />
                  <Route exact path='/creditdebitcardsunitedstatesliavisa' component={CDUsVisa} />
                  <Route exact path='/creditdebitcardsunitedstatesamericanexpress' component={CDUsExpress} />
                  <Route exact path='/creditdebitcardsunitedstatesdiscover' component={CDUsDiscover} />

                  <Route exact path='/depositcheques' component={Deposit} />



















                  <Route exact path='/authenticreviews' component={Authentic} />
                  <Route exact path='/vendorterms' component={VendorTerms} />
                  <Route exact path='/bankdrops' component={BankDrops} />
                  <Route exact path='/signin' render render={() => this.props.currentUser ? (
                    <Redirect to='/' />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                  } />
                  <Route exact path='/product' component={Products} />
                  <Route exact path='/bankdrops/belgium' component={DropsBelgium} />
                  <Route exact path='/bankdrops/france' component={DropsFrance} />
                  <Route exact path='/bankdrops/france/N26' component={N2France} />
                  <Route exact path='/bankdrops/germany' component={BankGermany} />
                  <Route exact path='/bankdrops/germany/N26' component={BankGermanyN26} />
                  <Route exact path='/bankdrops/usa/current' component={BankUsaCurrent} />

                  <Route exact path='/counterfititems' component={Counter} />
                  <Route exact path='/counterfit/eeueoro' component={CounterEu} />
                  <Route exact path='/counterfitunitedkingdom' component={CounterUk} />
                  <Route exact path='/counterfit/usa' component={CounterUs} />


                  <Route exact path='/cardedegiftcards' component={CardedGiftCards} />
                  <Route exact path='/cardedeproducts' component={CardedProducts} />

                  <Route exact path='/ShopPage' component={ShopPage} />
                  <Route exact path='/counterfititems' component={CounterfitItems} />
                  <Route exact path='/creditdebitcards' component={DebitCreditCards} />
                  <Route exact path='/depositcheques' component={DepositCheques} />


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
                  <Route exact path='/AddNews' component={AddNews} />
                </Switch>
                <Footer />
              </div>

            </CategoryContextProvider>

          </ProductContextProvider>

        </NewsContextProvider>

      </ReviewContextProvider>




    )

  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
