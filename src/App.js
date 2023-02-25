import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Detail from "./components/Detail";
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes, //'Switch' replaced to 'Routes' in react-router-dom v6
  Route,
  Link,
} from "react-router-dom";
import { async } from "@firebase/util";

function App() {


  // const API_URL = 'https://api.themoviedb.org/3';
  // const API_KEY = 'd55f85a5233a7b2b3f832e888347976d';
  // const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  // const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  //Variables de estado
  // const [movies, setMovies] = useState([]);
  // const [searchKey, setSearchKey] = useState('');

  // // function peticion
  // const fetchMovies = async(searchKey) => {
  //   const type = searchKey ? 'search' : 'discover';
    
  // }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
