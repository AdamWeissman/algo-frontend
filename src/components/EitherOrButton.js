import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div class="ui large buttons">
        <button class="blue ui button active">FIRST</button>
        <div class="or"></div>
        <button class="black ui button">SECOND</button>
      </div>
  )
  }
}

export default EitherOrButton;