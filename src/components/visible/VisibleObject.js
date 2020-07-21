import React from 'react'

const VisibleObject = props => {
    return (
        <tr>
            <td><a href={props.object.url}><strong>{props.object.name}</strong></a></td>
            <td>{props.object.rise}</td>
            <td>{props.object.set}</td>
            <td>{props.object.magnitude}</td>
        </tr>
    )
}

export default VisibleObject