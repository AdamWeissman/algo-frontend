import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div class="ui massive toggle buttons" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <button class="ui button active">EXPLORE</button>
        <div class="or"></div>
        <button class="black ui button" style={{color: "#49fb35"}}>CREATE</button>
      </div>
  )
  }
}

export default EitherOrButton;