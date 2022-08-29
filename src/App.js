import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Mint from './components/Mint';
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Mint />
    </>
  );
}

export default App;
