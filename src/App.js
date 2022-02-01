import React,{useState} from 'react';
import './App.css';
import AddMovie from './components/AddMovie/AddMovie';
import {moviesData} from "./components/MoviesData"
import MoviesList from './components/MoviesList/MoviesList'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import {Route, Routes} from 'react-router-dom'
function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  console.log(moviesList)
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/MoviesList' element={<MoviesList moviesList ={moviesList} />} />
      {/* <AddMovie/> */}
      </Routes>
    </div>
  );
}

export default App;
