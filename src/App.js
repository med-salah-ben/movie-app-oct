import React , {useState} from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import SearchAppBar from "./components/SearchAppBar";
import { MovieData } from "./MovieData";

function App() {
  const [movies , setMovies] = useState(MovieData);
  const [searchRating,setSearchRating] = useState(0)
  console.log(searchRating)
  const [searchTitle,setSearchTitle]= useState("")
  console.log(searchTitle)

  const addMovie = (movie) =>{
    console.log(movie)
    setMovies([...movies,movie])
  }
  return (
 <div style={{backgroundColor:"gray"}}>
  <SearchAppBar setSearchRating={setSearchRating} setSearchTitle={setSearchTitle} />
  <AddMovie addMovie={addMovie} />
  <MoviesList movies={movies} searchRating={searchRating} searchTitle={searchTitle} />
 </div>
  );
}

export default App;
