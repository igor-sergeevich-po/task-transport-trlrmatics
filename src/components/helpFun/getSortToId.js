export const getSortToId = (e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn) => {
    setActiveColumn(e.target.innerText)

    document.querySelectorAll('th').forEach(item => {
      if(item.classList.contains('active-column')) {
        const columnFilterName =(Array.from(
          item.innerText.matchAll(/[a-z]/g)).join('')
          )

        item.innerText = columnFilterName;
    }
      item.classList.remove('active-column');
  });
   
    e.target.classList.add('active-column');
    setActiveColumn(e.target.innerText)
  if(dataIsSorted) {
    e.target.innerText = 'id ▲'
    userTable.sort((a, b) => {
      setDataIsSorted(false)
      return a.id-b.id
    })
  }
  if(!dataIsSorted) {
    
    setDataIsSorted(true)
    e.target.innerText = 'id ▼'
    userTable.sort((a, b) => {
   return b.id-a.id
    })
  }


  
  }