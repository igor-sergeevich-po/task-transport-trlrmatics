export const getSortToName = (e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn) => {
    document.querySelectorAll('th').forEach(item => item.classList.remove('active-column'));
    e.target.classList.add('active-column');
    setActiveColumn(e.target.innerText)
  if(dataIsSorted) {

    // e.target.innerText = 'company ▼'
    setDataIsSorted(false)
    userTable.sort((a,b)=> {
      const aa = a.name;
      const bb = b.name;
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

    // e.target.innerText = 'company ▲'
    setDataIsSorted(true)
    userTable.sort((a,b)=> {
      const aa = a.name;
      const bb = b.name;
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