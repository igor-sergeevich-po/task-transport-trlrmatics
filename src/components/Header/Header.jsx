import React from 'react';
import { Table } from '../Table/Table';
import PDF from '../../assets/svg/pdf.svg'
import XLSX from '../../assets/svg/xlsx.svg'
import { Pagination } from '../Pagination/Pagination';


export const Header = () => {
const getFilterUsers=(e) => {
    const input = e.target.value;
    const users = document.querySelectorAll('tbody tr')
    users.forEach(item=> {
        
        const start = item.innerHTML.indexOf('id">')
        const end = +start+5
        const test = +item.innerHTML.slice(start,end).match(/[0-9]/g).join('')
        if(+test !== +input){
            item.classList.add('filtered-column')
        }

        if(input === '') {
            item.classList.remove('filtered-column')
        }
    })

}
  return (
    <div className='wrapper'>
        <div className='header'>
            <div className="header__content">
                <div className="container">
                    <div className="pagination">
                        <p className="pagination__text">Показывать</p>
                        <select className="pagination__selector"> 
                            <option className='selector__item' value={1}>3</option> 
                            <option className='selector__item' value={2}>5</option> 
                            <option className='selector__item' value={3}>10</option> 
                            <option className='selector__item' value={4}>15</option> 
                        </select>
                    </div>
                    <div className="download-buttons">
                        <div className="download-buttons__item">
                            <img className='download-buttons__item-svg' src={PDF} alt="download pdf file" />
                            <p className='download-buttons__item-text'>PDF</p>
                        </div>
                        <div className="download-buttons__item">
                            <img className='download-buttons__item-svg' src={XLSX} alt="download xlsx file"/>
                            <p className='download-buttons__item-text'>XLSX</p>
                        </div>
                    </div>
                </div>
                <div className="search-form">
                    <label className='search-label'>
                    <p className='search-form__info'>Поиск</p>
                
                    <input onChange={(e)=>getFilterUsers(e)} className='input' type="text" placeholder='?'/>
                    </label>
                </div>
            </div>
        </div>
        <Table />
        <Pagination />
    </div>    
  )
}
