var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

//function operation()

function onButtonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 + number2;
    window.alert(summ);
}
function onButtonMinusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 - number2;
    window.alert(summ);
}
function onButtonMultiplyClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 * number2;
    window.alert(summ);
}
function onButtonDevideClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 / number2;
    window.alert(summ);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

// IntelliCode