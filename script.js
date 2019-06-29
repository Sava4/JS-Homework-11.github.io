// Почему для работы с input не рекомендуется использовать события клавиатуры?
// У input есть свои, более удобные методы работы с вводом 
let currActive;

const activateBtn = k => {
    currActive ? currActive.classList.toggle('active') : console.log('first run');
    for (let keyNode of document.querySelectorAll('.btn-wrapper > .btn')) {
        if (keyNode.innerHTML === k) {
            currActive = keyNode;
            break;
        }
    }
    currActive.classList.toggle('active');
}

document.getElementsByTagName('body')[0].addEventListener('keypress', ev => {
    switch (ev.code) {
        case 'Enter':
            activateBtn('Enter');
            break;
        case 'KeyS':
            activateBtn('S');
            break;
        case 'KeyE':
            activateBtn('E');
            break;
        case 'KeyO':
                activateBtn('O');
                break;
        case 'KeyN':
            activateBtn('N');
            break;
        case 'KeyL':
                activateBtn('L');
                break;
        case 'KeyZ':
                activateBtn('Z');
                break;                
    }
});