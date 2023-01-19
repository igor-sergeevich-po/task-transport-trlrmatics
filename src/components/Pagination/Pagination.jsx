import React from 'react';
import { useContext } from 'react';
import { UsersContext } from '../hoc/UsersProvider';
import { v4 as uuid } from 'uuid';
import { handleChangeCurrentPage } from '../helpFun/handleChangeCurrentPage'
export const Pagination = () => {
    const {currentPageNumber, setCurrentPageNumber, totalNumberPages} = useContext(UsersContext);

  return (
    <React.Fragment>
        <nav className='nav' aria-label="...">
            <p>{`page ${currentPageNumber} из ${totalNumberPages}`}</p>
            <ul className="pagination-nav">
              <li key={uuid()} onClick={() => handleChangeCurrentPage (1, setCurrentPageNumber, currentPageNumber, totalNumberPages) } className={
                  `page-item ${currentPageNumber == 1? 'isDisabled': ''}`}>
                  <a  className="page-link" href="#">{`<<`}</a>
              </li>
              <li  key={uuid()} onClick={() => handleChangeCurrentPage ('-', setCurrentPageNumber, currentPageNumber, totalNumberPages) } className={
                  `page-item ${currentPageNumber == 1? 'isDisabled': ''}`}>
                  <a className="page-link" href="#">{`<`}</a>
              </li>
              <li  key={uuid()} onClick={() => handleChangeCurrentPage ('+', setCurrentPageNumber, currentPageNumber, totalNumberPages) } className={
                  `page-item ${currentPageNumber == totalNumberPages? 'isDisabled': ''}`}>
                  <a  className="page-link" href="#">{`>`}</a>
              </li>
              <li  key={uuid()} onClick={() => handleChangeCurrentPage (-1, setCurrentPageNumber, currentPageNumber, totalNumberPages) } className={
                  `page-item ${currentPageNumber == totalNumberPages? 'isDisabled': ''}`}>
                  <a  className="page-link" href="#">{`>>`}</a>
              </li>
            </ul>
        </nav>
    </React.Fragment>
  )
}
