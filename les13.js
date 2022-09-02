

function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addDefaultClass(elementId){
    var element = document.getElementById(elementId);
    element.className = 'default-input';
}

function addErrorClassAllInputs() {
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
}

function addDefaultClassAllInputs(){
    addDefaultClass('first-name');
    addDefaultClass('last-name');
    addDefaultClass('address');
}

function changedInput(elementId){
    var element = document.getElementById(elementId);
    console.log(element.value);
    //element.value = null;
    //element.setAttribute('value', '1');
}

function changedAllInput(){
    changedInput('first-name');
    changedInput('last-name');
    changedInput('address');
}

//window.setTimeout(addErrorClassAllInputs, 2000); //Таймаут на 2000мс после чего будет вызвана эта функция 

var sendButton = document.getElementById('send-button');
sendButton.addEventListener('mouseover', addErrorClassAllInputs);
sendButton.addEventListener('mouseout', addDefaultClassAllInputs);
sendButton.addEventListener('click', changedAllInput);


