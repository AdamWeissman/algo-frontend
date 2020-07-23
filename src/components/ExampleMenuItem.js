import React from 'react';

const exampleMenuItem = (props) => {
  return (
    <div>
    <button className="circular ui inverted green basic button" > {props} </button>
    </div>
  )
}

// class ExampleMenuItem extends React.Component {
//   render () {
//     return (
//       <div>this is an example menu item</div>
//     )
//   }

// }

export default exampleMenuItem;