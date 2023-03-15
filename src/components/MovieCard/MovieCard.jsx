import React from "react";

import ReactStars from "react-stars";

import { Card } from "react-bootstrap";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <Card >
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            value={movie.rating}
            edit={false}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
