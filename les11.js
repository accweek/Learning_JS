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

userName = document.getElementById('userNameId');
alertValue(userName);
userLastName = document.getElementById('userLastNameId');
alertValue(userLastName);
userNumberPhone = document.getElementById('userNumberPhoneId');
alertValue(userNumberPhone);
userCity = document.getElementById('userCityId');
alertValue(userCity);
userInfo = document.getElementById('userInfoId');
alertValue(userInfo);
userAvatar = document.getElementById('userAvatarId');
alertValue(userAvatar);
avatar = document.getElementById('avatarId');
alertValue(avatar);

userName.setAttribute('value', 'Ivan') ;
userLastName.setAttribute('value', 'Neloginov');
userCity.setAttribute('select','Moscow');
userInfo.setAttribute('value','Не знаю что сюда писать...');

/*
userLastName.value = "Neloginov";

userLastName.className = "default-input error-input";

avatar.src = "https://cs14.pikabu.ru/post_img/2022/06/23/6/1655975229170327950.png";

userAvatar.title = "hehehe";

userAvatar.innerHTML = "asdqwe";*/