import React from 'react';


import { Features, Footer, Hero, Team, Faq} from './containers';
import {Button, Navbar } from './components';
import './App.css';
const App = () => {
  const faqs = [
    { id: 1, question: 'What is National identity?', answer: 'National identity refers to a sense of belonging and collective identity shared by the citizens of a nation-state.' },
    { id: 2, question: 'What is National identity database?', answer: 'A national identity database is a centralized repository of information containing biometric and demographic data of individuals within a particular country.' },
    { id: 3, question: 'Why does this project matter?', answer: 'The current system is mostly compromised by the human factor, our model is an encompassing system that validates the integrity leveraging artificial intelligence.' },
  { id: 4, question: 'Can I use my toe print instead of finger print?', answer: 'No, our model is trained to differentiate between toe and finger prints. Therefore it will be flagged.' },
  { id: 5, question: 'Can you differentiate between identical twins?', answer: 'Yes, our model is trained to identify the facial landmarks in every human.' }

 
  ];

  return (
    <div className='App'>
        <div>
      <Navbar />
      <Hero />
      <Features />
      <Button />
      <Faq faqs={faqs}/>
      <Team />
      <Footer />
        </div>
        
    </div>
  )
}

export default App