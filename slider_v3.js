var sliderFactory = {

    createNewSlider: function () {
        var newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            showPrevBtn: null, 
            showNextBtn: null,
            slideImage: null, 

            start: function(elId) {
                //*
                var that = this;
                
                var elSelector = '#' + elId;
                var el = document.querySelector(elSelector);

                this.showPrevBtn = el.querySelector('.show-prev-btn');
                this.showNextBtn = el.querySelector('.show-next-btn');
                this.slideImage = el.querySelector('.slide-img');

                //subscribe to evets
                this.showPrevBtn.addEventListener('click', function(e){ 
                    //*Реализовано для того чтобы обернуть this (замкнуть его) тем сам он выдает именно ссылку на переменную слайдер а не на кнопку
                    that.onShowPrevBtnClick(e);
                });
                this.showNextBtn.addEventListener('click', function(e){ 
                    that.onShowNextBtnClick(e);
                });

                //create images array
                this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH64U30vqKxVZysSKubDhFQXybBNxs6YS98S-xuZH4RR887EE7lhVVTGnYf3TQdj---M&usqp=CAU');
                this.imagesUrls.push('https://media.proglib.io/wp-uploads/2018/06/jhkhk.jpg');
                this.imagesUrls.push('https://media.tproger.ru/uploads/2021/09/js-cover-icon-original.png');
                this.imagesUrls.push('https://play-lh.googleusercontent.com/KFT37-e-uooLQFyVMXU9x50ndlviVWXOQKnqE15X1A7yae9s0Nm-v1xhir9_cnaUaRU');

                this.slideImage.src = this.imagesUrls[this.currentImageIndex];

                this.showPrevBtn.disabled = true;
            },

            onShowPrevBtnClick: function(e) {
                this.currentImageIndex--;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;
            
                //disabled prev button if need
                if (this.currentImageIndex === 0){
                    this.showPrevBtn.disabled = true;
                }
            },

            onShowNextBtnClick: function(e) {   
                this.currentImageIndex++;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;
            
                //disabled next button if need
                if (this.currentImageIndex === (this.imagesUrls.length - 1)){
                    this.showNextBtn.disabled = true;
                }
            }
        };

        return newSlider;
    } 
};