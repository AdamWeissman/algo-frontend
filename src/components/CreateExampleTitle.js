import React from 'react'

const createExampleTitle = (props) => {

  // onSubmit={() => props.submitExampleTitle(props.algorithm, this.name)}

  return (
    <div>
      <input type="text"
      id="title"
      name="title"
      placeholder="Enter a title."
      onSubmit={() => console.log(props.name)}>
      </input>
    </div>
  )
}

//need to set up POST request here

export default createExampleTitle;