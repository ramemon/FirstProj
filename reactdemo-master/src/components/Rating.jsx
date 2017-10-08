import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default function Rating(props){
  return(
      <h3><Glyphicon glyph={props.icon} /> {props.title}</h3>
  );
}
