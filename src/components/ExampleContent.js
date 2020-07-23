import React from 'react';

const exampleContent = (props) => {
    return (
      <div style={{maxHeight: '200px', maxWidth: '200px', overflow: 'scroll'}}>{props.content}</div>
    );
  }

export default exampleContent;