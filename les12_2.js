
function LogValue(id){
    var el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id){
    var el = document.getElementById(id);
    return el.value;
}

var userNameId = 'userNameId';
var userLastNameId = 'userLastNameId';

LogValue(userNameId);
LogValue(userLastNameId);

var value = getValue(userNameId);
window.alert(value);
var value1 = getValue(userLastNameId);
window.alert(value1);