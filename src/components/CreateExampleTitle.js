import React from 'react'

const createExampleTitle = (props) => {

  console.log(() => props.SubmitExampleTitle)
  console.log(() => props.exampleTitle)
  console.log(() => props.exampleContent)

  return(
    <div>{props.exampleTitle}</div>
  )

}

//need to set up POST request here

export default createExampleTitle;