import React from 'react'

function FunctionClick() {
    clickHandler() {
        console.log('Button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button></div>    //do not add (), it is a function but not a function call
  )
}

export default FunctionClick