//this component needs to be renamed...
// what it's referencing in ToShowOrNotToShow is a SAVE BUTTON
// OR, a refresh button.  Save Button only if in CREATE mode instead of explore

import React from 'react';
import SaveButton from './SaveButton' 


const toShowOrNotToShow = (props) => {
  const initialMessage = "CLICK HERE TO BEGIN"
  const exploreMessage = "REFRESH"

  if (props.whichMode == "") {
    return (
      <button className="circular ui red button" onClick={ () => props.reloadRefresh() }> {initialMessage} </button>
      )
  } else if (props.whichMode === "EXPLORE") {
    return (
      <button className="circular ui red button" onClick={ () => props.reloadRefresh() }> {exploreMessage} </button>
      )
  } else if (props.whichMode === "CREATE") {
    return (
      <div>
        <button className="circular ui red button" onClick={ () => props.reloadRefresh() }> {exploreMessage} </button>
      </div>
      )
  }
  
  // THIS WAS FORMERLY IN === CREATE <SaveButton reloadRefresh={props.reloadRefresh} submit={() => console.log("A SUBMIT ACTION WILL OCCUR HERE")} />
  
}

export default toShowOrNotToShow;