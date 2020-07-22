import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div class="ui large buttons">
        <button class="blue ui button active">VIEW</button>
        <div class="or"></div>
        <button class="black ui button">ADD</button>
      </div>
  )
  }
}

export default EitherOrButton;