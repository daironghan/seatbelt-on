import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Mint from './components/Mint';
import Intro from './components/Intro';
import Background from './components/Background';
import Sneakpeak from './components/Sneakpeak';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Background />
      <Mint>
      </Mint>
      <Intro />
      <Sneakpeak />
      <Team />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
