import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div class="ui large buttons">
        <button class="teal ui button active">EXPLORE</button>
        <div class="or"></div>
        <button class="black ui button" style={{color: "#49fb35"}}>CREATE</button>
      </div>
  )
  }
}

export default EitherOrButton;