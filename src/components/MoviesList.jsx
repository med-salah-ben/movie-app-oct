import React from 'react'
import Movie from './Movie'

const MoviesList = ({movies,searchRating,searchTitle}) => {
    console.log(movies)
  return (
    <div style={{display:"flex" , justifyContent:"space-between", flexWrap:"wrap"}}>
        {
            movies
            .filter(el=>el.name.toLowerCase().includes(searchTitle.toLowerCase().trim()) &&
            el.rating >= searchRating
            )
            .map(el=><Movie key={el.id} movie={el} />)
        }
    </div>
  )
}

export default MoviesList