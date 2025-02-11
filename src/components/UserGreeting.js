import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false 
      }
    }

  render() {
    //4th approach 
    return this.state.isLoggedIn && <div>Welcome Adel</div>

    //3rd ternary condition approach 
    // return (
    //     this.state.isLoggedIn ?
    //     (<div> Welcome Adel</div>) : 
    //     (<div>Welcome Guest</div>)
    // )



    // 2nd approach 
    // element variable 
    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Adel</div>
    // } else {
    //     <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>




    //if else 1st approach 
    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Adel</div>
    //     )

    // } else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }


//     return (
//         <div>
//         <div>Weolcome Adel</div>
//       <div>Welcome Guest</div>
//       </div>
//     )
   }
}

export default UserGreeting