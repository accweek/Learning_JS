var userName;
var userLastName;
var userNumberPhone;
var userCity;
var userInfo;
var userAvatar;
var avatar;

function alertValue(El){
    console.log(El.value);
    console.log(El.className);
}

function getEl(id){
    var el = document.getElementById(id);
    return el;
}

userName = getEl('userNameId');
alertValue(userName);
userLastName = getEl('userLastNameId');
alertValue(userLastName);
userNumberPhone = getEl('userNumberPhoneId');
alertValue(userNumberPhone);
userCity = getEl('userCityId');
alertValue(userCity);
userInfo = getEl('userInfoId');
alertValue(userInfo);
userAvatar = getEl('userAvatarId');
alertValue(userAvatar);
avatar = getEl('avatarId');
alertValue(avatar);

/*
userName.setAttribute('value', 'Ivan') ;
userLastName.setAttribute('value', 'Neloginov');
userCity.setAttribute('select','Moscow');
userInfo.setAttribute('value','Не знаю что сюда писать...');


userLastName.value = "Neloginov";

userLastName.className = "default-input error-input";

avatar.src = "https://cs14.pikabu.ru/post_img/2022/06/23/6/1655975229170327950.png";

userAvatar.title = "hehehe";

userAvatar.innerHTML = "asdqwe";*/