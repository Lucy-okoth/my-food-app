import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cards from './components/Card';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
   <NavBar />
   <Hero />
  <Cards />
  <Food />
  <Category />
    </div>
  );
}

export default App;
