import React from 'react';

const exampleMenuItem = (props) => {
  return (
    <div>
    <button className="circular ui inverted green basic button" onClick={() => props.contentGrabber(`${props.algorithm_id}`, `${props.id}`)}> {props.title} </button>
    </div>
  )
} 

export default exampleMenuItem;