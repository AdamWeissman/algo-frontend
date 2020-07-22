import React from 'react';

const algoMenuItem = (props) => {
  
  const cHandler = () => {
    console.log("I was clicked");
  }

  return (
    <div>
    <button className="circular ui inverted green basic button" onClick={cHandler} >{props.algotype}</button>
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