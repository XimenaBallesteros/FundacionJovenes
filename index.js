const slider = document.querySelector("#slider");
let sliderSection= document.querySelectorAll("#.slider__section");
let sliderSectionLast= sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afeterbegin', sliderSectionLast);
/*
function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"; 
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft ="-100%";
    },500);
}
btnRight.addEventListener('click', function(){
    Next();
});
function Prev(){
    let sliderSection= document.querySelectorAll("#.slider__section");
    let sliderSectionLast=sliderSection[sliderSection.length-1];
    slider.style.marginLeft ="00%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"; 
        slider.insertAdjacentElement('afeterbegin', sliderSectionLast);        slider.style.marginLeft ="-100%";
        slider.style.marginLeft ="-100%";
        alert('tiene el boton');
    },500);
}
btnLeft.addEventListener('click', function(){
    Prev();
    alert('tiene el boton');
});*/