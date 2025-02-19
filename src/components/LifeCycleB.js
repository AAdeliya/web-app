import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Adeliya'
      }
      console.log('LifecycleB constructor')
    }

    static getDrivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStatefromProps')
        return null
    }

    componentdidMount() {
        console.log('LifecycleB cimponentDidMount')
    }

  render() {
    console.log('LifecycleB render')
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB