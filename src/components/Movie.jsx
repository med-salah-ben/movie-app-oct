import React from 'react';
import { Card , Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';


const Movie = ({movie}) => {
  return (
    <Card style={{ width: '18rem' , margin:'1rem' }}>
    <Card.Img variant="top" style={{height:"25vh"}} src={movie.image} />
    <Card.Body>
      <Card.Title> {movie.name} </Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Rating name="read-only" value={movie.rating} readOnly />

      <Button variant="primary">Watch</Button>
    </Card.Body>
  </Card>
  )
}

export default Movie