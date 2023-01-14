import React from 'react'

export const Pagination = () => {
  return (
    <React.Fragment>
        <nav aria-label="...">
            <ul className="pagination-nav">
                <li className="page-item disabled">
                    <a className="page-link">{'<<'}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">{'>>'}</a>
                </li>
            </ul>
        </nav>
    </React.Fragment>
  )
}
