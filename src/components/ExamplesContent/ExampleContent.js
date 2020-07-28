import React from 'react';
import CreateExampleContent from './CreateExampleContent'


const exampleContent = (props) => {

  if (props.whichMode == "") {
    return (
      <div className="circular ui segment">
      </div>
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
        createExampleSetter={props.createExampleSetter}
        algorithm={props.algorithm}
        example={props.example}
        content={props.content}
        onCreateContent={props.onCreateContent}
      />
    </div>
      )
  }

  }


export default exampleContent;