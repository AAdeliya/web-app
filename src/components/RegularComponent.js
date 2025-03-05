import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log('Reg Component render')
    return (
      <div>RegularComponent {this.props.name}</div>
    )
  }
}

export default RegularComponent