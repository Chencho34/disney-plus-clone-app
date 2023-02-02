import React from 'react';
import Header from './components/Header'
import Home from './components/Home';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Header/>  
      <Home/>
    </div>
  );
}

export default App;
