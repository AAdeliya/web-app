import React, { Component } from 'react'

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
      <div>LifeCycle A</div>
    )
  }
}

export default LifeCycleA