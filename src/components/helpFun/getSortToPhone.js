export   const getSortToPhone = (e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn) => {
    setActiveColumn(e.target.innerText)
    document.querySelectorAll('th').forEach(item => item.classList.remove('active-column'));
    e.target.classList.add('active-column');
    setActiveColumn(e.target.innerText)
  if(dataIsSorted) {
    // e.target.innerText = 'id ▲'
userTable.sort((a, b) => {
        setDataIsSorted(false)
        return +(a.phone.match(/[0-9]/g).join(''))- +(b.phone.match(/[0-9]/g).join(''))
    })
}
if(!dataIsSorted) {

    // e.target.innerText = 'id ▼'
userTable.sort((a, b) => {
        setDataIsSorted(true)
        return +(b.phone.match(/[0-9]/g).join(''))- +(a.phone.match(/[0-9]/g).join(''))
    })
  }


  
  }