export const getSortToUserName = (e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn) => {
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
    
    setActiveColumn(e.target.innerText);

  if(dataIsSorted) {
    e.target.innerText = 'user-name ▼'
    setDataIsSorted(false)
    userTable.sort((a,b)=> {
      const aa = a.username;
      const bb = b.username;
      if (aa > bb) {
          return -1
      } else if (aa < bb) {
          return 1
      } else {
          return 0
      }
    })
  }
  if(!dataIsSorted) {
    e.target.innerText = 'user-name ▲'
    setDataIsSorted(true)
    userTable.sort((a,b)=> {
      const aa = a.username;
      const bb = b.username;
      if (aa > bb) {
          return 1
      } else if (aa < bb) {
          return -1
      } else {
          return 0
      }
    })
  }
  }