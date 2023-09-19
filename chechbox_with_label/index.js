let checkboxWithLabelContainerEl = document.getElementById('checkboxWithLabelContainer');
checkboxWithLabelContainerEl.classList.add('text-center', 'p-5')

let inputEl = document.createElement('input')
inputEl.type = ('checkbox')
inputEl.id = ('checkbox');
checkboxWithLabelContainerEl.appendChild(inputEl);

let labelEl = document.createElement('label');
labelEl.setAttribute('for', 'checkbox');
labelEl.textContent = 'Click Me!';
labelEl.classList.add('ml-2');
labelEl.id = 'checkboxLabel';
checkboxWithLabelContainerEl.appendChild(labelEl)