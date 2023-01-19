import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
export const UsersContext = createContext(null);

export const UsersProvider = ({children}) => {
    const [userTable, setUserTable] = useState([]);
    const [dataIsSorted, setDataIsSorted] = useState(false);
    const [activeColumn, setActiveColumn] = useState('company');

    const [currentRowInfo, setCurrentRowInfo] = useState('')

    const [totalNumberUsers, setTotalNumberUsers] = useState(10);
    const [limitNumberUsers, setLimitNumberUsers] = useState(10);
    const [totalNumberPages, setTotalNumberPages] = useState(1);

    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    const lastUserInList = currentPageNumber * limitNumberUsers;
    const firstUserInList = lastUserInList - limitNumberUsers;
    const actualLimitedArray =  userTable.slice(firstUserInList, lastUserInList)


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => setUserTable(data))
    }, [])
        
    useEffect(() => {
    setInterval(() => {
      if(userTable.length){
        setTotalNumberUsers(userTable.length)
      }
    }, 150);
        
       
      
    }, [userTable])

    useEffect(() => {
      const pages = Math.ceil(+totalNumberUsers / +limitNumberUsers)
      setTimeout(() => {
        setTotalNumberPages(pages)

      }, 115);
    }, [limitNumberUsers])

    const value = {actualLimitedArray, currentPageNumber, setCurrentPageNumber, currentRowInfo, setCurrentRowInfo, totalNumberPages, setTotalNumberPages, limitNumberUsers, setLimitNumberUsers, totalNumberUsers, userTable, setUserTable, dataIsSorted, setDataIsSorted, activeColumn, setActiveColumn};

  return (
    <UsersContext.Provider value={value}>
        {children}
    </UsersContext.Provider>
  )
}
