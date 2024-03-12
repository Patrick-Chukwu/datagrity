import React from 'react';


import { Features, Footer, Hero, Team, Faq} from './containers';
import {Button, Navbar } from './components';
import './App.css';
const App = () => {
  const faqs = [
    { id: 1, question: 'Why ?', answer: 'React is a JavaScript library for building user interfaces.' },
    { id: 2, question: 'How do you use React?', answer: 'You can use React by creating components and composing them together to build UIs.' },
    // Add more FAQ objects as needed
  ];

  return (
    <div className='App'>
        <div>
      <Navbar />
      <Hero />
      <Features />
      <Faq faqs={faqs}/>
      <Team />
      <Footer />
        </div>
        
    </div>
  )
}

export default App