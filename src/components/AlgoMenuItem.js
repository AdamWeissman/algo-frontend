import React from 'react';

const algoMenuItem = (props) => {
  
  const algoClickHandler = () => {
    console.log(props.id);
  }

  return (
    <div>
    <button className="circular ui inverted green basic button" onClick={algoClickHandler} >{props.algotype}</button>
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