import React from 'react'

const UpdatedComponent = (Originalcomponent) => {
class NewCommponent extends React.Component {
    render () {
        return <Originalcomponent name="adel"></Originalcomponent>
    }
}
return NewCommponent

}

export default UpdatedComponent