import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col } from "react-bootstrap";

function SingoloFilm({ title, img }) {
  return (
    <Col className="mb-2 text-center  px-1">
      <img className="img-fluid rounded-4" src={img} alt={title} />
      <h6 className="mt-2 " id="titoloFilm">
        {title}
      </h6>
    </Col>
  );
}

export default SingoloFilm;
