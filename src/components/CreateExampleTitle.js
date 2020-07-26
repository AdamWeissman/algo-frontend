import React from 'react'

const createExampleTitle = (props) => {

  // props.createExampleTitle(`${props.algorithm}`, `${title}`)
  
  return (
    <div>{props.algorithm}</div>
  )
}

//need to set up POST request here

export default createExampleTitle;