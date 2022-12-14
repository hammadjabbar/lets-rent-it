import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './screens/Index/index.js'
import Contact from './screens/contact/contact'
import AboutUs from './screens/aboutus/aboutus'
import HostSignLogin from './components/Host-sign-login/Host-sign-login'
import CusSignLogin from './components/Customer-sign-login/Customer-sign-login'
import AdvSignLogin from './components/Advertiser-sign-login/Adv-sign-login'
import SearchPage from './screens/searchresult/SearchPage'
import InsertApart from './screens/insertapart/InsertApart'
import BookPage from './screens/bookpage/BookingPg'
import ApartDetails from './screens/apartdetails/apartDetails'
import HostHome from './screens/hosthomepage/hostSearchPage'
import CusHome from './screens/customerhome/customerhome'
import AdvIns from './screens/advinsert/AdvIns'
import ViewAds from './screens/viewAds/ViewAds'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< Index/>} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/aboutUs" element={< AboutUs/>} />
          <Route path="/host-sign-login" element={< HostSignLogin/>} />
          <Route path="/cus-sign-login" element={< CusSignLogin/>} />
          <Route path="/adv-sign-login" element={< AdvSignLogin/>} />
          <Route path="/search-page/:city/:flag" element={< SearchPage/>} />
          <Route path="/insertapart-page" element={< InsertApart/>} />
          <Route path="/apartdetails-page" element={< ApartDetails/>} />
          <Route path="/book-page" element={< BookPage/>} />
          <Route path="/hosthome/:flag" element={< HostHome/>} exact/>
          <Route path="/cusHome" element={< CusHome/>} />
          <Route path="/AdvInsert" element={< AdvIns/>} />
          <Route path="/viewAds" element={< ViewAds/>} />
          </Routes>
      </Router>
    </div>


  );
}

export default App;
