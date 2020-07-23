import React from 'react';

const algoMenuItem = (props) => {
  return (
    <div>
    <button className="circular ui inverted green basic button" onClick={() => props.exampleGrabber(`${props.id}`)} >{props.algotype}</button>
    </div>
  )
}

// class AlgoMenuItem extends React.Component {
//   render () {
//     return (
//       <div>
//       <button className="circular ui inverted green basic button">{this.props.algotype}</button>
//       </div>
//     )
//   }
// }

export default algoMenuItem;