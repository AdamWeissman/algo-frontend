//this component needs to be renamed...
// what it's referencing in ToShowOrNotToShow is a SAVE BUTTON
// OR, a refresh button.  Save Button only if in CREATE mode instead of explore

import React from 'react';
import EitherOrButton from './EitherOrButton'
import SaveButton from './SaveButton' 
// SaveButton should go in the div

const toShowOrNotToShow = (props) => {
  const initialMessage = "CLICK HERE TO BEGIN"
  
  if (props.whichMode == "") {
    return (
      <button onClick={ () => props.switch() }> {initialMessage} </button>
      )
  } else if (props.whichMode == "EXPLORE") {
    return (
      <button onClick={ () => props.switch() }> {initialMessage} </button>
      )
  } else if () {
    return (
      <button onClick={ () => props.switch() }> {initialMessage} </button>
      )
  }
  
  
}

export default toShowOrNotToShow;