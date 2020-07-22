import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div className="ui inverted segment" style={ { marginTop: '8px', marginLeft: '75px', marginRight: '75px'} }>
      <div className="circular ui center compact segment" >
        <div className="ui fitted slider checkbox">
          <input type="checkbox"/>
          <label></label>
        </div>
      </div>
      </div>
    );
  }
}

export default EitherOrButton;