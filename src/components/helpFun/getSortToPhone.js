export   const getSortToPhone = (e, userTable, dataIsSorted, setDataIsSorted,activeColumn, setActiveColumn) => {
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
    e.target.innerText = 'phone ▲'
userTable.sort((a, b) => {
        setDataIsSorted(false)
        return +(a.phone.match(/[0-9]/g).join(''))- +(b.phone.match(/[0-9]/g).join(''))
    })
}
if(!dataIsSorted) {

    e.target.innerText = 'phone ▼'
userTable.sort((a, b) => {
        setDataIsSorted(true)
        return +(b.phone.match(/[0-9]/g).join(''))- +(a.phone.match(/[0-9]/g).join(''))
    })
  }


  
  }