import React from 'react';

const algoMenuItem = (props) => {
  return (
    <div>
    <button className="circular ui inverted green basic button" onClick={() => props.exampleGrabber(`${props.id}`)} >{props.algotype}</button>

    {/* <button className="circular ui inverted green basic button" onClick={() => props.algoSelector(props.algotype)} >{props.algotype}</button> */} 

    </div>
  )
}

export default algoMenuItem;