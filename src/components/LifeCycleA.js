import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Adeliya'
      }
      console.log('LifecycleA constructor')
    }

    static getDrivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStatefromProps')
        return null
    }

    componentdidMount() {
        console.log('LifecycleA cimponentDidMount')
    }

  render() {
    console.log('LifecycleA render')
    return (
    <div>
      <div>LifeCycle A</div>
      <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA