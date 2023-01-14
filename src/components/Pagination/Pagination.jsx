import React from 'react'

export const Pagination = () => {
  return (
    <React.Fragment>
        <nav aria-label="...">
            <ul class="pagination-nav">
                <li class="page-item disabled">
                    <a class="page-link">{'<<'}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">{'>>'}</a>
                </li>
            </ul>
        </nav>
    </React.Fragment>
  )
}
