import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)


    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler= {this.greetParent} ></ChildComponent>Component</div>
    )
  }
}

export default ParentComponent

//under ParentComponent define a method
//under ChildComponent pass a method as a props
//Access the method using a props object props.greetHandler('child')