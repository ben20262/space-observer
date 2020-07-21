import React from 'react'
import VisibleObject from './VisibleObject'

const VisibleObjects = props => {
    return (
        <table className='VisibleObjects'>
            <tbody>
                <tr>
                    <th className='Name'><strong>Name</strong></th>
                    <th className='Rise'>Rise</th>
                    <th className='Set'>Set</th>
                    <th className='Magnitude'>Magnitude</th>
                </tr>
                {props.visibleObjects.map(object => <VisibleObject key={object.id} object={object} />)}
            </tbody>
        </table>
    )
}

export default VisibleObjects