import React from 'react';

class EitherOrButton extends React.Component {
  render () {
    return (
      <div className="ui inverted segment" style={ { marginTop: '5px', marginLeft: '85px', marginRight: '85px'} }>
        <div className="circular ui center green compact segment" style={{backgroundColor: "ivory"}} >
        <div className="circular ui raised green segment">
              <strong>EXPLORE OR CREATE</strong>
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