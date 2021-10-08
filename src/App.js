import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
    
    
    <Header/>{/* importa la classe Header.js */}
    <TinderCards/>{/* TINDER CARDS */}
    <SwipeButtons/>{/* SWIPEBUTTONS */}
    </div>
  );
}

export default App;
