export const setFocutOnInput = () => {
    const input = document.querySelector('input');
    input.classList.add('isActive');
    input.focus();
    
    document.querySelector('.input').classList.add('isActive');

    input.addEventListener('focusout',  () => { 
            input.classList.remove('isActive')
        });
}