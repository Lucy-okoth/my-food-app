import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Card';
import Food from './components/Food';
import Category from './components/Category';
import {  Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
//import Accounts from './components/Accounts';
import { AuthContextProvider } from './context/AuthContext';
//import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import Signin from './components/Signin';
// import Accounts from './components/Accounts';
// import Signup from './components/Signup';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
    <AuthContextProvider>
    
    <Routes>
   <Route path="/" element={<NavBar />} />
   </Routes>
   <Routes>
   <Route path="/" element={<Hero />} />
   </Routes>
   <Routes>
   <Route path="/" element={<Cards />} />
   </Routes>
   <Routes>

   <Route path="/" element={<Food />} />
   </Routes>
   <Routes>
   <Route path="/" element={<Category />} />
   </Routes>
   <Routes>

  <Route path="/signin" element={< Signin/>} />
  </Routes>
  <Routes>
  <Route path="/signup" element={< Signup/>} />
  </Routes>
   {/* <Routes>
  <Route path="/accounts" element={< Accounts/>} />
  </Routes>  */}
  </AuthContextProvider>
    </div>
  );
}

export default App;
