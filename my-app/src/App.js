import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import NewList from './components/NewList';
import FunList from './components/FunList';
// import { useState, useEffect } from 'react';

function App() {
  //useEffect here, pass down to components as props
  
  return (
    <div className="App">
      <Header />
      <Home />
      <NewList />
      <FunList />
    </div>
  );
}

export default App;