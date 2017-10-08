import React from 'react'

export default function GameTitle(props){
  const style = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };
  return(
    <h1 style={style}> {props.name} </h1>
  );
}
