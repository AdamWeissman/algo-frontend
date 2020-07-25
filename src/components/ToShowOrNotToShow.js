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
      <button onClick={ () => props.switch() }> {initialMessage} </button>
      )
  } else if (props.whichMode == "EXPLORE") {
    return (
      <button onClick={ () => props.switch() }> {exploreMessage} </button>
      )
  } else if (props.whichMode == "CREATE") {
    return (
      <div>
      <SaveButton />
      </div>
      )
  }
  
  
}

export default toShowOrNotToShow;