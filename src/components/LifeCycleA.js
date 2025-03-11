// import React, { Component } from 'react'
// import LifeCycleB from './LifeCycleB'

// class LifeCycleA extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name: 'Adeliya'
//       }
//       console.log('LifecycleA constructor')
//     }

//     static getDrivedStateFromProps(props, state) {
//         console.log('LifecycleA getDerivedStatefromProps')
//         return null
//     }

//     componentdidMount() {
//         console.log('LifecycleA cimponentDidMount')
//     }

//     shoulComponentUpdate() {
//         console.log('LifecycleA shouldComponentUpdate')
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log('LifecycleA getSnapshotBeforeUpdate')
//         return null
//     }

//     componentdidUpdate() {
//         console.log('LifecycleA componentdidUpdate')
//     }

//     changestate = () => {
//         this.setState({
//             name: 'Codevolution'
//         })
//     }


//   render() {
//     console.log('LifecycleA render')
//     return (
//     <div>
//       <div>LifeCycle A</div>
//       <button onClick={this.changeState}>Change state</button>
//       <LifeCycleB></LifeCycleB>
//       </div>
//     )
//   }
// }

// export default LifeCycleA