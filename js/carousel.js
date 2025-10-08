// const imgs = document.getElementById("carousel");
// const img = document.querySelectorAll("#carousel-title");

// let idx = 0;

// function carrosel (){
//     idx++;
//     if(idx > img.length -1){
//         idx = 0;
//     }
// }

// imgs.style.transform = `translateX(${-idx * 500}px)`;

// setInterval(carrosel, 1800);
//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        
    }
};
