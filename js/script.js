'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const params = (new URL(document.location)).searchParams;
    let steps = +params.get('next');
    while(steps > 0) {
        shower.next();
        steps--
    }
    // setTimeout(() => {
        document.body.classList.remove('_hidden');
    // }, 10000)
})