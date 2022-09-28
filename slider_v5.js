//Конструктор
function Slider(){
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null; 
    this.showNextBtn = null;
    this.slideImage = null; 
};

//Прототипы нужны, чтобы выносить методы из контруктора, тем самым подгрузка этого метода происходит только тогда, 
//когда какой нибудь конкретный экземпляр конструктора захочет его вызвать, тем самым данный код трати меньше памяти; 
//В то же время выносить переменную либо объект из конструктора в прототип нельзя, тк в первом случае при изменении ее в прототипе,
//она будет создаваться локально в конструкторе тк ее экземпляра там нет;
//во втором случае при изменении переменной объекта в прототипе она будет меняться во всем конструкторе для всех экземпляров!

Slider.prototype.start = function(elId) {
    //*
    var that = this;
    
    //Получение ссылки на блок див конкретного слайдера по получаемому айди
    var elSelector = '#' + elId;
    var el = document.querySelector(elSelector);

    //Получение информации по переменным через их классы в блоках див (прошлый коммент)
    this.showPrevBtn = el.querySelector('.show-prev-btn');
    this.showNextBtn = el.querySelector('.show-next-btn');
    this.slideImage = el.querySelector('.slide-img');

    //Активация событий
    this.showPrevBtn.addEventListener('click', function(e){ 
        //*Реализовано для того чтобы обернуть this (замкнуть его) тем сам он выдает именно ссылку на переменную слайдер а не на кнопку
        that.onShowPrevBtnClick(e);
    });
    this.showNextBtn.addEventListener('click', function(e){ 
        that.onShowNextBtnClick(e);
    });

    //Заполнение массива изображений слайдера
    this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH64U30vqKxVZysSKubDhFQXybBNxs6YS98S-xuZH4RR887EE7lhVVTGnYf3TQdj---M&usqp=CAU');
    this.imagesUrls.push('https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg');
    this.imagesUrls.push('https://media.tproger.ru/uploads/2021/09/js-cover-icon-original.png');
    this.imagesUrls.push('https://play-lh.googleusercontent.com/KFT37-e-uooLQFyVMXU9x50ndlviVWXOQKnqE15X1A7yae9s0Nm-v1xhir9_cnaUaRU');

    //Заполнение 1 (0) изображения в слайдере
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];

    this.showPrevBtn.disabled = true;
};

Slider.prototype.onShowNextBtnClick = function(e) {
    this.currentImageIndex++;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;

    //Блокировка кнопка при необходимости
    if (this.currentImageIndex === (this.imagesUrls.length - 1)){
        this.showNextBtn.disabled = true;
    }    
};

Slider.prototype.onShowPrevBtnClick = function(e) {   
    this.currentImageIndex--;
    this.slideImage.src = this.imagesUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;   
    
    //Блокировка при необходимости
    if (this.currentImageIndex === 0){
        this.showPrevBtn.disabled = true;
    }
}
