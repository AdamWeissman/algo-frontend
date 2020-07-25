import React from 'react';
import EitherOrButton from './EitherOrButton'
import SaveButton from './SaveButton' 
// SaveButton should go in the div

const toShowOrNotToShow = (props) => {
  const initialMessage = "CLICK HERE TO BEGIN NEEDS SOME CONDITIONAL LOGIC"

  return (
      <button onClick={ () => props.switch() }> {initialMessage} </button>
      )
}

export default toShowOrNotToShow;