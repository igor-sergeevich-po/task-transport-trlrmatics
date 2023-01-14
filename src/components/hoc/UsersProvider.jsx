import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
export const UsersContext = createContext(null);

export const UsersProvider = ({children}) => {
    const [userTable, setUserTable] = useState([])
    const [dataIsSorted, setDataIsSorted] = useState(false);
    const [activeColumn, setActiveColumn] = useState('company')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_limit=12')
        .then(resp => resp.json())
        .then(data => setUserTable(data))
    }, [])

    useEffect(() => {

    }, [userTable])
        const value = {userTable, setUserTable, dataIsSorted, setDataIsSorted, activeColumn, setActiveColumn};

  return (
    <UsersContext.Provider value={value}>
        {children}
    </UsersContext.Provider>
  )
}
