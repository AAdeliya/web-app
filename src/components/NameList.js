import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diane']
    const nameList =  names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {
        nameList
      }
    </div>
  
  )
}

const personList = personalbar.map(person => <Person key={person.id} person={preson}/>)
return <div>{personList}</div>

export default NameList