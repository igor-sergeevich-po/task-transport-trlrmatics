import React from 'react';
import { Table } from '../Table/Table';
import PDF from '../../assets/svg/pdf.svg'
import XLSX from '../../assets/svg/xlsx.svg'
import { Pagination } from '../Pagination/Pagination';
import { useContext } from 'react';
import { UsersContext } from '../hoc/UsersProvider';
import { getFilterUsers } from '../helpFun/getFilterUsers';
import { getPDFtable } from '../helpFun/getPDFtable';
import 'jspdf-autotable';
import { getXLSXtable } from '../helpFun/getXLSXtable';

export const Header = () => {
    const {activeColumn, setLimitNumberUsers,} = useContext(UsersContext);
    
    const handleSetLimitUsersOnPage = (e) => {
        const limit = e.target.value
        setLimitNumberUsers(limit)
    }

    const setFocutOnInput = (e) => {
        const input = document.querySelector('input');
        input.classList.add('isActive');
        input.focus();
        
        document.querySelector('.input').classList.add('isActive');

        input.addEventListener('focusout',  () => { 
                input.classList.remove('isActive')
            });
    }

  return (
    <div className='wrapper'>
        <div className='header'>
            <div className="header__content">
                <div className="container">
                    <div className="pagination">
                        <p className="pagination__text">Показывать</p>
                        <select defaultValue='10' onChange={(e) => handleSetLimitUsersOnPage(e)} className="pagination__selector"> 
                            <option  className='selector__item' value={3}>3</option> 
                            <option className='selector__item' value={5}>5</option> 
                            <option  className='selector__item' value={10}>10</option> 
                            <option className='selector__item' value={15}>15</option> 
                        </select>
                    </div>
                    <div className="download-buttons">
                        <div className="download-buttons__item" onClick={()=> getPDFtable()}>
                            <img className='download-buttons__item-svg' src={PDF} alt="download pdf file" />
                            <p className='download-buttons__item-text'>PDF</p>
                        </div>
                        <div className="download-buttons__item" onClick={()=> getXLSXtable('xlsx', 'firstsheet')}>
                            <img className='download-buttons__item-svg' src={XLSX} alt="download xlsx file"/>
                            <p className='download-buttons__item-text'>XLSX</p>
                        </div>
                    </div>
                </div>
                <div onClick={(e)=>setFocutOnInput(e)} className="search-form">
                    <label className='search-label'>
                    <p className='search-form__info'>Поиск</p>
                
                    <input onChange={(e)=>getFilterUsers(e, activeColumn)} className='input' type="text" placeholder='?'/>
                    </label>
                </div>
            </div>
        </div>
        <Table />
        <Pagination />
    </div>    
  )
}
