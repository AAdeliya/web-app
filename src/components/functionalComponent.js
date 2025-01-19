import React from 'react'

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  export default Greeting;
  
//   With Hooks:
//   jsx
  
//   import React, { useState } from 'react';
  
//   function Counter() {
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     );
//   }
  
//   export default Counter;
  
  