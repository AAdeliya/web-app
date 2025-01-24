import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message : 'Hello'
      }
      //this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message : 'Goodbye!'

    //     })

    // }



    //Forth approach  - class property as a clas
    clickHandler = () => {
      this.setState({
        message : 'Goodbuy'
      })
    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        //first aproach for event handler  - binding in render (low performance)
        {/*<button onClcik = {this.clickHandler.bind(this)}>Click</button>*/}


        //second approach - arrow function in render (easiest way to past parameters)
        {/*<button onClick={() => this.clickHandler()}>Click</button> */}

        //third approach - binding in the class constructor, this is better the binding in the render method - suggestions from REACT

        <button onClick={this.clickHandler}>Click </button>
        </div>
    )
  }
}

export default EventBind