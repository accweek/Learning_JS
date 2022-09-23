//find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');

//subscribe to evets
showPrevBtn.addEventListener('click',onShowPrevBtnClick);
showNextBtn.addEventListener('click',onShowNextBtnClick);

//create images array
var imagesUrls = [];
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH64U30vqKxVZysSKubDhFQXybBNxs6YS98S-xuZH4RR887EE7lhVVTGnYf3TQdj---M&usqp=CAU');
imagesUrls.push('https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg');
imagesUrls.push('https://media.tproger.ru/uploads/2021/09/js-cover-icon-original.png');
imagesUrls.push('https://play-lh.googleusercontent.com/KFT37-e-uooLQFyVMXU9x50ndlviVWXOQKnqE15X1A7yae9s0Nm-v1xhir9_cnaUaRU');

var currentImageIndex = 0;

slideImage.src = imagesUrls[currentImageIndex];

// !! SLIDER WITH BLOCKED START AND END !!

showPrevBtn.disabled = true;

//functions definitions
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    //disabled prev button if need
    if (currentImageIndex === 0){
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick() {   
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //disabled next button if need
    if (currentImageIndex === (imagesUrls.length - 1)){
        showNextBtn.disabled = true;
    }
}


// // !! SPIN SLIDER !!

// //func click on button of slider
// function onShowPrevBtnClick(){
//     //spin in the end slider if it's need
//     if (currentImageIndex === 0) {
//         currentImageIndex = imagesUrls.length - 1;
//     } else {currentImageIndex--;}
//     slideImage.src = imagesUrls[currentImageIndex];
// }
// function onShowNextBtnClick(){
//     currentImageIndex++;
//     slideImage.src = imagesUrls[currentImageIndex];

//     //spin in the start slider if it's need
//     if (currentImageIndex === (imagesUrls.length)) {
//         currentImageIndex = 0;
//         slideImage.src = imagesUrls[currentImageIndex]
//     }
// }