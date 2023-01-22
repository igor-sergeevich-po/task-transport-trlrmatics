export const addMarkForText = (activeColumn, item, input) => {
    const elem = item.querySelector(`.${activeColumn}`);
    const userInput = input.toLowerCase();
    const elemText = elem.innerText;
    const startPos = elemText.search(new RegExp(`${userInput}`, 'i'));

        if(startPos !== -1 & input.length > 0) {
            item.querySelector(`.${activeColumn}`).innerText = '';
            elem.innerHTML = `
                ${elemText.slice(0, startPos)}<mark>${elemText.slice(
                    startPos, startPos + input.length)}</mark>${elemText.slice(
                        startPos+input.length)}`
        }else if (startPos == -1 & input.length == 0) {
            item.querySelector(`.${activeColumn}`).innerText = ''
            elem.innerText = elemText;
        }else if(!input) {
            elem.innerText = elemText;
        }
}