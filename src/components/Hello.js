
//WITH JSX 

import React from 'react'

const Hello = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello class</h1>
    //     </div>
    // )


    //  without jsx 
    return React.createElement(
    'div',
    {id: 'hello', className: 'dummyclass'},

    React.createElement('h1', null, 'Hello Adel')
    )
}

export default Hello