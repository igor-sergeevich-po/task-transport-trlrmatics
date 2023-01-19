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
import { getMoreInfo } from '../helpFun/getMoreInfo';
import { v4 as uuidv4 } from 'uuid';

export const Table = () => {
  const {actualLimitedArray,  setCurrentRowInfo, userTable, dataIsSorted, setDataIsSorted, activeColumn, setActiveColumn} = useContext(UsersContext);

  return (
      <React.Fragment>
        <table className="table" id='tables'>
          <thead className='thead'>
            <tr className='thead-row'>
              <th className='column column__#' ></th>
              <th onClick={(e)=>getSortToCompany(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__company active-column' >company</th>
              <th onClick={(e)=>getSortToEmail(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__email' >email</th>
              <th onClick={(e)=>getSortToId(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__id' >id</th>
              <th onClick={(e)=>getSortToName(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)}  className='column column__name' >name</th>
              <th onClick={(e)=>getSortToPhone(e, userTable, dataIsSorted, setDataIsSorted, activeColumn, setActiveColumn)} className='column column__phone' >phone</th>
              <th onClick={(e)=>getSortToUserName(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__user-name' >user-name</th>
              <th onClick={(e)=>getSortToWebsite(e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn)} className='column column__website' >website</th>
            </tr>
          </thead>
          <tbody>
              {actualLimitedArray.map((item, index) => {
                let isNeedIndex = true
                    if (index % 2 === 0){
                      isNeedIndex = false
                    }
                return (
                  <>
                    <tr key={uuidv4()} className={`active-line ${(isNeedIndex)? 'tr_gray': ''}`} >
                      <th id='row-info' className="row" onClick={()=> getMoreInfo(item, setCurrentRowInfo)}>&#10148;</th>
                      <td id='row-info' className="company">{item.company.name}</td>
                      <td id='row-info' className="email">{item.email}</td>
                      <td id='row-info' className="id">{item.id}</td>
                      <td id='row-info' className="name">{item.name}</td>
                      <td id='row-info' className="phone">{item.phone}</td>
                      <td id='row-info' className="user-name">{item.username}</td>
                      <td id='row-info' className="website">{item.website}</td>
                    </tr>
                    <tr key={uuidv4()} id={item.company.name} className="ghost hidden-row">
                        <td colSpan='2'></td>
                        <td colSpan='2'>
                          <p>city: {item.address.city}</p>
                          <p>street: {item.address.street}</p>
                          <p>suite: {item.address.suite}</p>
                          <p>zipcode: {item.address.zipcode}</p>
                        </td>
                        <td colSpan='2'>
                          <p>bs: {item.company.bs}</p>
                          <p>catchPhrase: {item.company.catchPhrase}</p>
                        </td>
                        <td colSpan='2'></td>
                    </tr>
                  </>
            )
        })}

          </tbody>
        </table>
      </React.Fragment>
  )
}
