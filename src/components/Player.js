import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PropTypes from "prop-types";

function Player(props) {


 
 return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
      {props.obj.age}
        {props.children}
      </Card.Text>
     
    </Card.Body>
  </Card>
  )


 
}

Player.propTypes = {
    name:PropTypes.number
 };

Player.defaultProps={
   name:"john"
}


export default Player