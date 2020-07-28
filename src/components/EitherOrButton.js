import React from 'react';

const eitherOrButton = (props) => {
    // let algorithms = props.algorithms 
    // I seem to be passing props the wrong way from above...
    
    let allAlgos = props.allAlgos
    let algosLimited = props.algosLimited

    return (
      <div className="ui inverted segment" style={ { marginTop: '5px', marginLeft: '85px', marginRight: '85px'} }>
        <div className="circular ui center green compact segment" style={{backgroundColor: "ivory"}} >
        <div className="circular ui raised green segment">
              <strong>EXPLORE OR CREATE</strong>
            </div>
            <br />
          <div className="ui fitted slider checkbox">
            <input type="checkbox"
              id="myCheck"
              onClick={() => {
                if (document.getElementById("myCheck").checked === true) {
                  allAlgos()
                } else {
                  console.log("this is the else")
                  algosLimited()
                } 

              }}
             />
            <label></label>
          </div>
            
        </div>
      </div>
    );
}

export default eitherOrButton;