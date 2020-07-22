import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div className="ui inverted segment" style={ { marginTop: '5px', marginLeft: '75px', marginRight: '75px'} }>
        <div className="circular ui center compact segment" style={{backgroundColor: "ivory"}} >
        <div className="circular ui raised segment">
              TOGGLE TO EXPLORE ALGORITHIMS<br />
              OR, CONTRIBUTE AN EXAMPLE...
            </div>
            <br />
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