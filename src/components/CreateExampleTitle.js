import React from 'react'

const createExampleTitle = (props) => {

  return (
    <div>
      <input type="text"
      name="title"
      placeholder="Enter a title."
      onSubmit={props.submitExampleTitle(`${props.algorithm}`, "title test")}>
      </input>
    </div>
  )
}

//need to set up POST request here

export default createExampleTitle;