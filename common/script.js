'use strict'

let activeButton = null;

document.addEventListener('click', function(e) {
    const target = e.target.closest('.js-button');
    if(!target) return

    const isActive = target.classList.contains('_active');
    if(isActive) {
        target.classList.remove('_active');
        activeButton = null;
    } else {
        target.classList.add('_active');
        if(activeButton) activeButton.classList.remove('_active');
        activeButton = target;
    }
});