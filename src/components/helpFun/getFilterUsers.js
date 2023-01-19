import { addMarkForText } from "./addMarkForText";

export const getFilterUsers=(e, activeColumn) => {
    const input = e.target.value;
    const users = document.querySelectorAll('.active-line');

    users.forEach(item=> {
        let testCeilText = (item.querySelector(`.${activeColumn}`).innerText).toLowerCase();
        
        addMarkForText(activeColumn, item, input);
        
        item.classList.remove('filtered-column');
        
        if(activeColumn === 'phone') {
            testCeilText = (Array.from(testCeilText.matchAll(/[0-9]/g))).join('');
        }
        if(!testCeilText.includes(input)) {
            item.classList.add('filtered-column');
        }
    })
}