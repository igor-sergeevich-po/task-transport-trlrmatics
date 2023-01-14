import React from 'react';
import { useContext } from 'react';
import { UsersContext } from '../hoc/UsersProvider';
import { getSortToCompany } from '../helpFun/getSortToCompany';
import { getSortToId } from '../helpFun/getSortToId';
import { getSortToEmail } from '../helpFun/getSortToEmail';
import { getSortToName } from '../helpFun/getSortToName';
import { getSortToWebsite } from '../helpFun/getSortToWebsite';
import { getSortToUserName } from '../helpFun/getSortToUserName';
import { getSortToPhone } from '../helpFun/getSortToPhone';
import { v4 as uuidv4 } from 'uuid';

export const Table = () => {
  const {userTable, dataIsSorted, setDataIsSorted, setActiveColumn} = useContext(UsersContext)
 
  return (
      <React.Fragment>
        <table className="table">
          <thead className='thead'>
            <tr className='thead-row'>
              <th className='column column__#' ></th>
              <th onClick={(e)=>getSortToCompany(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__company' >company</th>
              <th onClick={(e)=>getSortToEmail(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__email' >email</th>
              <th onClick={(e)=>getSortToId(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__id' >id</th>
              <th onClick={(e)=>getSortToName(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)}  className='column column__name' >name</th>
              <th onClick={(e)=>getSortToPhone(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__phone' >phone</th>
              <th onClick={(e)=>getSortToUserName(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__user-name' >user name</th>
              <th onClick={(e)=>getSortToWebsite(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__website' >website</th>
            </tr>
          </thead>
          <tbody>
              {userTable.map(item => {
                return (
                  <tr key={uuidv4()}>
                    <th className="row">&#10148;</th>
                    <td>{item.company.name}</td>
                    <td>{item.email}</td>
                    <td className='filter-id'>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.website}</td>
                  </tr>

            )
        })}
          </tbody>
        </table>
      </React.Fragment>
  )
}
