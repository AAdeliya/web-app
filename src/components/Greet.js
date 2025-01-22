
//FUNCTIONAL COMPONENT 
import React from 'react'

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            //we set under App.js Greet  name = "Bruce" heroName = "Batman" Greet, and accsessing them props.name 
         <h1>Hello {name} a.k.a {heroName}</h1>
         </div>
          )
}

export default Greet