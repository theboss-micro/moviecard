
import React from 'react';
import AddMovie from '../AddMovie/AddMovie';
import MovieCard from "../MovieCard/MovieCard";

import './MoviesList.css'

function MoviesList({moviesList}) {
  return <div  style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
}}>

{moviesList.map((movie, i) => <MovieCard key={i} movie={movie}/>)}
<AddMovie />
  </div>;
}

export default MoviesList;











