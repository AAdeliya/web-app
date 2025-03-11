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

    componentDidMount() {
        console.log('LifecycleB cimponentDidMount')
    }

    shoulComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null 
    }

    componentDidUpdate() {
        console.log('LifecycleB componentdidUpdate')
    }


  render() {
    console.log('LifecycleB render')
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB