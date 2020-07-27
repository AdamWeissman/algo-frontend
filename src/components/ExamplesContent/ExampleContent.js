import React from 'react';
import CreateExampleContent from './CreateExampleContent'

const exampleContent = (props) => {

  if (props.whichMode == "") {
    return (
      <div>no mode</div>
      )
  } else if (props.whichMode === "EXPLORE") {
    return (
      <div style={{maxHeight: '200px', maxWidth: '200px', overflow: 'scroll'}}>
        {props.content}
      </div>
      )
  } else if (props.whichMode === "CREATE") {
    return (
      <div style={{maxHeight: '200px', maxWidth: '200px', overflow: 'scroll'}}>
      <CreateExampleContent
        algorithm={props.algorithm}
        example={props.example}
        onCreateContent={props.onCreateContent}
      />
    </div>
      )
  }

  }


export default exampleContent;