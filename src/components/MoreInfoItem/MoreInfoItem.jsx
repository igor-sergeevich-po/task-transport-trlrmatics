import React from 'react'
import { useContext } from 'react'
import { UsersContext } from '../hoc/UsersProvider'
import { v4 as uuid } from 'uuid';
export const MoreInfoItem = () => {
    const {currentRowInfo} = useContext(UsersContext);
  return (
    <React.Fragment>
    { currentRowInfo && <tr key={uuid()} className='grow'>
            <th colSpan={8}>
            {currentRowInfo.address.street}
            {currentRowInfo.address.city}
            {currentRowInfo.name}
            
            </th>
        </tr>}

    </React.Fragment>
  )
}
