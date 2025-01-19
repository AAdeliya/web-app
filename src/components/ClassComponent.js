import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;

// With State:

// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;



// ES6 classclass Car {
//     constructor(name) {
//       this.brand = name;
//     }
//   }
  
//   const mycar = new Car("Ford");



// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
    
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
//   const mycar = new Car("Ford");
//   mycar.present();





//   //Inheritance
//   class Car {
//     constructor(name) {
//       this.brand = name;
//     }
  
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
//   class Model extends Car {
//     constructor(name, mod) {
//       super(name);
//       this.model = mod;
//     }  
//     show() {
//         return this.present() + ', it is a ' + this.model
//     }
//   }
//   const mycar = new Model("Ford", "Mustang");
//   mycar.show();
