import React from 'react'
import { useContext } from 'react'
import { UsersContext } from '../hoc/UsersProvider'
import { v4 as uuid } from 'uuid'
export const Pagination = () => {
    const {currentPageNumber, setCurrentPageNumber, totalNumberPages} = useContext(UsersContext)

    const handleChangeCurrentPage = (pageValue) => {
      if (pageValue == '-' & currentPageNumber > 1) {
        setCurrentPageNumber(currentPageNumber-1)
      } else if (pageValue == '+' & currentPageNumber < totalNumberPages) {
        setCurrentPageNumber(currentPageNumber+1)
      } else if (pageValue === 1) {
        setCurrentPageNumber(1)
      } else if (pageValue === -1) {
        setCurrentPageNumber(totalNumberPages)
      }
    }
  return (
    <React.Fragment>
        <nav className='nav' aria-label="...">
            <p>{`page ${currentPageNumber} из ${totalNumberPages}`}</p>
            <ul className="pagination-nav">
              <li  key={uuid()} onClick={() => handleChangeCurrentPage (1) } className="page-item">
                  <a className="page-link" href="#">{`<<`}</a>
              </li>
              <li  key={uuid()} onClick={() => handleChangeCurrentPage ('-') } className="page-item">
                  <a className="page-link" href="#">{`<`}</a>
              </li>
              <li  key={uuid()} onClick={() => handleChangeCurrentPage ('+') } className="page-item">
                  <a  className="page-link" href="#">{`>`}</a>
              </li>
              <li  key={uuid()} onClick={() => handleChangeCurrentPage (-1) } className="page-item">
                  <a  className="page-link" href="#">{`>>`}</a>
              </li>
            </ul>
        </nav>
    </React.Fragment>
  )
}
