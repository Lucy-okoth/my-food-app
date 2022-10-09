import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Card';
import Food from './components/Food';
import Category from './components/Category';
// import { Route, Routes } from 'react-router-dom';
// import Signin from './components/Signin';
// import Accounts from './components/Accounts';
// import Signup from './components/Signup';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
   <NavBar />
   <Hero />
  <Cards />
  <Food />
  <Category />
  {/* <Routes >
  
  <Route path='/Signin' element={<Signin />} />
  <Route path='/Signup' element={<Signup />} />
  <Route path='/Accounts' element={<Accounts />} />
  </Routes> */}

    </div>
  );
}

export default App;
