import React from 'react';


import { Features, Footer, Hero, Team, Faq} from './containers';
import {Button, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className='App'>
        <div>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Footer />
        </div>
        
    </div>
  )
}

export default App