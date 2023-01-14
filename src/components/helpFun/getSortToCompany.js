export const getSortToCompany = (e, userTable, dataIsSorted, setDataIsSorted) => {
    document.querySelectorAll('th').forEach(item => item.classList.remove('active-column'));
    e.target.classList.add('active-column');
  if(dataIsSorted) {
    // e.target.innerText = 'company ▼'
    setDataIsSorted(false)
    userTable.sort((a,b)=> {
      const aa = a.company.name;
      const bb = b.company.name;
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
      const aa = a.company.name;
      const bb = b.company.name;
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