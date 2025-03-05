import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponent from './PureComponent'

class ParentComponent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Adel'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Adel'
            })
        }, 2000)
    }
  render() {
    console.log('***** Parent Component render ****')
    return (
      <div>ParentComponent1
        <RegularComponent name = {this.state.name}></RegularComponent>
        <PureComponent name = {this.state.name}></PureComponent>
      </div>
    )
  }
}

export default ParentComponent1