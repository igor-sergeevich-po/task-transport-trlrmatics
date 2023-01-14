import React from 'react'

export const Table = ({users}) => {
  return (
      <React.Fragment>
        <table class="table">
          <thead className='thead'>
            <tr className='thead-row'>
              <th className='column column__#' ></th>
              <th className='column column__company' >company</th>
              <th className='column column__email' >email</th>
              <th className='column column__id' >id</th>
              <th className='column column__name' >name</th>
              <th className='column column__phone' >phone</th>
              <th className='column column__user-name' >user name</th>
              <th className='column column__website' >website</th>
            </tr>
          </thead>
          <tbody>
              {users.map(item => {
                return (
                  <tr>
                    <th className="row">&#10148;</th>
                    <td>{item.company.name}</td>
                    <td>{item.email}</td>
                    <td>{item.id}</td>
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
