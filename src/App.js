import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Detail from "./components/Detail";
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes, //'Switch' replaced to 'Routes' in react-router-dom v6
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="login" index element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
