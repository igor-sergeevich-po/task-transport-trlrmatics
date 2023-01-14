export   const getSortToPhone = (e, userTable, dataIsSorted, setDataIsSorted, setActiveColumn) => {
    setActiveColumn(e.target.innerText)
    console.log(e.target)
    document.querySelectorAll('th').forEach(item => item.classList.remove('active-column'));
    e.target.classList.add('active-column');
  if(dataIsSorted) {
    console.log('отсортировано')
    // e.target.innerText = 'id ▲'
    console.log(userTable.sort((a, b) => {
        setDataIsSorted(false)
        return +(a.phone.match(/[0-9]/g).join(''))- +(b.phone.match(/[0-9]/g).join(''))
    }))
}
if(!dataIsSorted) {
    console.log('не отсортировано')
    // e.target.innerText = 'id ▼'
    console.log(userTable.sort((a, b) => {
        setDataIsSorted(true)
        return +(b.phone.match(/[0-9]/g).join(''))- +(a.phone.match(/[0-9]/g).join(''))
    }))
  }


  
  }