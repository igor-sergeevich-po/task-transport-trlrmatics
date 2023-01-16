export const getFilterUsers=(e, activeColumn) => {
    const input = e.target.value;
    const users = document.querySelectorAll('tbody tr')
    users.forEach(item=> {
        item.classList.remove('filtered-column')
        let testCeilText = (item.querySelector(`.${activeColumn}`).innerText).toLowerCase()
        if(activeColumn === 'phone') {
            testCeilText = (Array.from(testCeilText.matchAll(/[0-9]/g))).join('')
        }
        if(!testCeilText.includes(input)) {
            item.classList.add('filtered-column')
        }
    })

}