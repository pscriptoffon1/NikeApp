import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup1 from './screens/signup1'
import Signup2 from './screens/signup2'
import Signup3 from './screens/signup3'
import Signup4 from './screens/signup4'
import Signup5 from './screens/signup5'
import Signup6 from './screens/signup6'
import Login1 from './screens/login1'
import Login2 from './screens/login2'
import Login3 from './screens/login3'
import Login4 from './screens/login4'
import Login5 from './screens/login5'
import Accountsetup1 from './screens/accountsetup1'
import Accountsetup2 from './screens/accountsetup2'
import Accountsetup3 from './screens/accountsetup3'
import Accountsetup4 from './screens/accountsetup4'
import Accountsetup5 from './screens/accountsetup5'
import Accountsetup6 from './screens/accountsetup6'
import Accountsetup7 from './screens/accountsetup7'
import Accountsetup8 from './screens/accountsetup8'
import Accountsetup9 from './screens/accountsetup9'
import Accountsetup10 from './screens/accountsetup10'
import Discover from './screens/discover'
import Home2 from './screens/home2'
import Home3 from './screens/home3'
import Comments from './screens/comments'
import Infoh7 from './screens/infoh7'
import Shop from './screens/shop'
import Shop2 from './screens/shop2'
import Search from './screens/search'
import Search2 from './screens/search2'
import Socksproduct from './screens/socksproduct'
import Sneakersproduct from './screens/sneakersproduct'
import Filter from './screens/filter'
import Productpage1 from './screens/productpage1'
import Productpage2 from './screens/productpage2'
import Instruction from './screens/instruction'
import Reviews from './screens/reviews'
import Favorites from './screens/favorites'
import Bag from './screens/bag'
import Deliveryoption from './screens/deliveryoption'
import Bagempty from './screens/bagempty'
import Confirmation from './screens/confirmation'
import Check from './screens/check'
import Profile from './screens/profile'
import Editprofile from './screens/editprofile'
import Purshases from './screens/purshases'
import Checkprofile from './screens/checkprofile'
import Qrcode from './screens/qrcode'
import Events from './screens/events'
import City from './screens/city'
import Dated from './screens/dated'
import Inbox1 from './screens/inbox1'
import Profileinfo from './screens/profileinfo'
import Yournike from './screens/yournike'
import Following from './screens/following'
import Settings from './screens/settings'
import Language from './screens/language'
import Language2 from './screens/language2'
import Visibility from './screens/visibility'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup1 />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/signup3" element={<Signup3 />} />
          <Route path="/signup4" element={<Signup4 />} />
          <Route path="/signup5" element={<Signup5 />} />
          <Route path="/signup6" element={<Signup6 />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/login3" element={<Login3 />} />
          <Route path="/login4" element={<Login4 />} />
          <Route path="/login5" element={<Login5 />} />
          <Route path="/accountsetup2" element={<Accountsetup2 />} />
          <Route path="/accountsetup1" element={<Accountsetup1 />} />
          <Route path="/accountsetup3" element={<Accountsetup3 />} />
          <Route path="/accountsetup4" element={<Accountsetup4 />} />
          <Route path="/accountsetup5" element={<Accountsetup5 />} />
          <Route path="/accountsetup6" element={<Accountsetup6 />} />
          <Route path="/accountsetup7" element={<Accountsetup7 />} />
          <Route path="/accountsetup8" element={<Accountsetup8 />} />
          <Route path="/accountsetup9" element={<Accountsetup9 />} />
          <Route path="/accountsetup10" element={<Accountsetup10 />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/infoh7" element={<Infoh7 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop2" element={<Shop2 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search2" element={<Search2 />} />
          <Route path="/socksproduct" element={<Socksproduct />} />
          <Route path="/sneakersproduct" element={<Sneakersproduct />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/productpage1" element={<Productpage1 />} />
          <Route path="/productpage2" element={<Productpage2 />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/deliveryoption" element={<Deliveryoption />} />
          <Route path="/bagempty" element={<Bagempty />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/check" element={<Check />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/purshases" element={<Purshases />} />
          <Route path="/checkprofile" element={<Checkprofile />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/events" element={<Events />} />
          <Route path="/city" element={<City />} />
          <Route path="/dated" element={<Dated />} />
          <Route path="/inbox1" element={<Inbox1 />} />
          <Route path="/profileinfo" element={<Profileinfo />} />
          <Route path="/yournike" element={<Yournike />} />
          <Route path="/following" element={<Following />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/language" element={<Language />} />
          <Route path="/language2" element={<Language2 />} />
          <Route path="/visibility" element={<Visibility />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
