export   const getSortToId = (e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn) => {
    setActiveColumn(e.target.innerText)

    document.querySelectorAll('th').forEach(item => item.classList.remove('active-column'));
    e.target.classList.add('active-column');
  if(dataIsSorted) {
    // e.target.innerText = 'id ▲'
    userTable.sort((a, b) => {
      setDataIsSorted(false)
      return a.id-b.id
    })
  }
  if(!dataIsSorted) {
    
    setDataIsSorted(true)
    // e.target.innerText = 'id ▼'
    userTable.sort((a, b) => {
   return b.id-a.id
    })
  }


  
  }