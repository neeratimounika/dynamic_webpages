let aboutButtonEl = document.getElementById('aboutButton');
let timeToVisitButtonEl = document.getElementById('timeToVisitButton');
let attractionsButtonEl = document.getElementById('attractionsButton');
let aboutTabEl = document.getElementById('aboutTab');
let timeToVisitTabEl = document.getElementById('timeToVisitTab');
let attractionsTabEl = document.getElementById('attractionsTab');
timeToVisitTabEl.classList.add('d-none');
attractionsTabEl.classList.add('d-none');

function onClickAboutTab() {
    aboutTabEl.classList.remove('d-none');
    timeToVisitTabEl.classList.add('d-none');
    attractionsTabEl.classList.add('d-none');

    aboutTabEl.classList.add('selected-button');
    timeToVisitTabEl.classList.remove('selected-button');
    attractionsTabEl.classList.remove('selected-button');
}

function onClickTimeToVisitTab() {
    aboutTabEl.classList.add('d-none');
    timeToVisitTabEl.classList.remove('d-none');
    attractionsTabEl.classList.add('d-none');

    aboutTabEl.classList.remove('selected-button');
    timeToVisitTabEl.classList.add('selected-button');
    attractionsTabEl.classList.remove('selected-button');
}

function onClickAttractions() {
    aboutTabEl.classList.add('d-none');
    timeToVisitTabEl.classList.add('d-none');
    attractionsTabEl.classList.remove('d-none');

    aboutTabEl.classList.remove('selected-button');
    timeToVisitTabEl.classList.remove('selected-button');
    attractionsTabEl.classList.add('selected-button');
}