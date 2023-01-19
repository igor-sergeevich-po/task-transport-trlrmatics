export const addMarkForText = (activeColumn, item, input) => {
    const elem = item.querySelector(`.${activeColumn}`);
    const elemText = elem.innerText;
    const startPos = elemText.search(input);
    const lastPos = startPos + input.length;

        if(startPos !== -1 & input.length > 0) {
            console.log('startPos:',startPos !==-1)
            console.log('input.length', input.length)
            item.querySelector(`.${activeColumn}`).innerText = ''
            elem.innerHTML = `${elemText.slice(0, startPos)}<mark>${elemText.slice(startPos, startPos + input.length)}</mark>${elemText.slice(startPos+input.length)}`
        }else if (startPos == -1 & input.length == 0) {
            item.querySelector(`.${activeColumn}`).innerText = ''
            elem.innerText = elemText
        }else if(!input) {
            elem.innerText = elemText
        }



        // if(startPos !== -1 && input.length>=0) {
        //     item.querySelector(`.${activeColumn}`).innerText = ''
        //     elem.innerHTML = `${elemText.slice(0, startPos)}<mark>${elemText.slice(startPos, lastPos)}</mark>${elemText.slice(startPos+lastPos)}`
        // }else if (!input.length) {
        //     item.querySelector(`.${activeColumn}`).innerText = ''
        //     elem.innerText = elemText
        // }
}