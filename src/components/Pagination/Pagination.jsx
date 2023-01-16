import React from 'react'
import { useContext } from 'react'
import { UsersContext } from '../hoc/UsersProvider'
import { v4 as uuid } from 'uuid'
export const Pagination = () => {
    const {currentPageNumber, setCurrentPageNumber, activeColumn,  setTotalNumberPages, limitNumberUsers, totalNumberUsers, totalNumberPages, setLimitNumberUsers,} = useContext(UsersContext)
    const arrFromTotalNumberPage = Array.from(Array(totalNumberPages), (_, i) => i+1)

    const handleSetCurruntPage = (e) => {
        setCurrentPageNumber(e.target.innerText)
    }
  return (
    <React.Fragment>
        <nav aria-label="...">
            <ul className="pagination-nav">
               {arrFromTotalNumberPage.map(item=> {
                return <li  key={uuid()} className="page-item">
                            <a onClick={(e) => handleSetCurruntPage(e)} className="page-link" href="#">{item}</a>
                        </li>
               })}
            </ul>
        </nav>
    </React.Fragment>
  )
}
