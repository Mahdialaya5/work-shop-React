import React, { useState } from 'react'
import Filter from './components/Filter/Filter'
import MovieList from './components/MovieList/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {movies} from './data'
import Addmovie from './components/Addmovie/Addmovie';

function App() {
   
  const [datamovies, setmovies] = useState(movies)

  function filter(title){
    setmovies(datamovies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())))
  }
  function filterrating(rating){
    setmovies(datamovies.filter(el=>el.rating>=rating))
  }
 function addmovie(data){
 console.log(data);
  setmovies([...datamovies,data])
}

  return (
    <div>
      <Filter  filter={filter}  filterrating={filterrating} />
     <MovieList   data={datamovies}  />
     <Addmovie  addmovie={addmovie}  />

    </div>
  )
}

export default App




