import React from 'react';

const eitherOrButton = (props) => {
    return (
      <div className="ui inverted segment" style={ { marginTop: '5px', marginLeft: '85px', marginRight: '85px'} }>
        <div className="circular ui center green compact segment" style={{backgroundColor: "ivory"}} >
        <div className="circular ui raised green segment">
              <strong>EXPLORE OR CREATE</strong>
            </div>
            <br />
          <div className="ui fitted slider checkbox">
            <input type="checkbox" 
              onInput={() => console.log("on input")}
              onChange={() => console.log("on change")}
             />
            <label></label>
          </div>
            
        </div>
      </div>
    );
}

export default eitherOrButton;