import React from 'react';

const saveButton = (props) => {
    return(
      <center>
      <div className="circular ui inverted segment">
        <br />
          <button className="circular ui inverted red button" 
          onClick={() => {
           props.submit()
          }}>SAVE</button>
        <br />
        <button className="circular ui inverted red button" 
          onClick={() => {
           props.reloadRefresh()
          }}>GO BACK</button>
      </div>
      </center> 
    )
}

export default saveButton;