import React from 'react';
import './App.css';
import MenuBar  from './pages/Menubar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import SignIn from './pages/SingIn'
import { Routes,Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
     Learn React Router

    < MenuBar></MenuBar>

    <Routes>
     
      <Route path="/Home" element={<Home/>}></Route>
     
      <Route    path="/Services" element={<Services/>}></Route>
      <Route   element={<Products/>} path="/Products" >
      {/* <Route    index element={<NewProducts/>}></Route>
        <Route path="newProducts"   element={<NewProducts/>}></Route>
        <Route path="oldProducts" element={<OldProducts/>}></Route> */}
      </Route>
      <Route path="/Contactus" element={<Contact/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
     
     </Routes>

     {/* <nav>
      <div >
       <Link to="/home" style={{padding:'10px'}}>Home</Link>
       <Link to="/services" style={{padding:'10px'}}>Services</Link>
       <Link to="/products" style={{padding:'10px'}}>Prodcuts</Link>
       <Link to="/contactus" style={{padding:'10px'}}>Contact Us</Link>
       </div>
     </nav>
     <Routes>
     
      <Route path="/home" element={<Home/>}></Route>
     
      <Route    path="/services" element={<Services/>}></Route>
      <Route   element={<Products/>} path="/products" >
      <Route    index element={<NewProducts/>}></Route>
        <Route path="newProducts"   element={<NewProducts/>}></Route>
        <Route path="oldProducts" element={<OldProducts/>}></Route>
      </Route>
      <Route path="/contactus" element={<Contact/>}></Route>
     </Routes> */}
    </div>
  );
}

export default App;
