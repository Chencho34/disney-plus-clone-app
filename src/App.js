import React from 'react';
import Header from './components/Header'
import Home from './components/Home';
import { Counter } from './features/counter/Counter';
import './App.css';
import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Routes,  //'Switch' replaced to 'Routes' in react-router-dom v6
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="detail" element={<Detail/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );  
}

export default App;
