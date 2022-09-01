var userName;
var userLastName;
var userNumberPhone;
var userCity;
var userInfo;
var userAvatar;
var avatar;

debugger;
function alertValues() 
{
    console.log(userName);
    console.log(userLastName);
    console.log(userCity);
}

alertValues();

userName = document.getElementById('userNameId');
userLastName = document.getElementById('userLastNameId');
userNumberPhone = document.getElementById('userNumberPhoneId');
userCity = document.getElementById('userCityId');
userInfo = document.getElementById('userInfoId');
userAvatar = document.getElementById('userAvatarId');
avatar = document.getElementById('avatarId');

alertValues();

/*console.log(userName.value);
console.log(userLastName.value);
console.log(userNumberPhone.value);
console.log(userCity.value);
console.log(userInfo.value);
console.log(userAvatar.innerHTML);
console.log(avatar.alt);

userName.setAttribute('value', 'Ivan') ;
userLastName.value = "Neloginov";
userLastName.className = "default-input error-input";
avatar.src = "https://cs14.pikabu.ru/post_img/2022/06/23/6/1655975229170327950.png";
userAvatar.title = "hehehe";
userAvatar.innerHTML = "asdqwe";*/