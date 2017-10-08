import React from 'react';

export default function Summary(props){
  console.log('props' + props);
  return(
    <div>
      <h3>{props.category}</h3>
      <p>
        {props.summary}
      </p>
    </div>
  );
}
