import React from 'react';

const exampleMenuItem = (props) => {
  return (
    <div>
    <button className="circular ui inverted green basic button" > {props.title} </button>
    </div>
  )
}

export default exampleMenuItem;