import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Card';
import Food from './components/Food';
import Category from './components/Category';
//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
   <NavBar />
   <Hero />
  <Cards />
  <Food />
  <Category />
  {/* <BrowserRouter /> */}
    </div>
  );
}

export default App;
