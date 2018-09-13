var dart_left = document.querySelector('.dart-left');
var dart_right = document.querySelector('.dart-right');
const bgPhoto  = document.querySelectorAll('.bg-photo');
let current = 0;

clear();

function clear(){
    for( i = 0; i < bgPhoto.length; i++){
        bgPhoto[i].style.display = "none";
    }
}

function startSlide(){
    bgPhoto[current].style.display = "block";
}
startSlide();

dart_left.addEventListener('click', function(){
    if(current === 0){
        current = bgPhoto.length;
    }
    clear();
    bgPhoto[current-1].style.display = "block";
    current--;
})

dart_right.addEventListener('click', function(){
    if(current === bgPhoto.length -1){
        current = -1;
    }
    clear();
    bgPhoto[current +1].style.display = "block";
    current++;
})

//Change packages

const regular_title = document.querySelector('.regular-title');
const plus_title    = document.querySelector('.plus-title');
const premium_title = document.querySelector('.premium-title');
const regular_box   = document.querySelector('.regular');
const plus_box      = document.querySelector('.plus');
const premium_box   = document.querySelector('.premium');

regular_title.addEventListener('click', function(){
    plus_title.classList.remove('active');
    premium_title.classList.remove('active');
    regular_title.classList.add('active');
    regular_box.style.display = "grid";
    plus_box.style.display = "none";
    premium_box.style.display = "none";
    console.log('regular radi');
})

plus_title.addEventListener('click', function () {
    regular_title.classList.remove('active');
    premium_title.classList.remove('active');
    plus_title.classList.add('active');
    regular_box.style.display = "none";
    premium_box.style.display = "none";
    plus_box.style.display = "grid";
    console.log('regular radi');
})

premium_title.addEventListener('click', function () {
    regular_title.classList.remove('active');
    plus_title.classList.remove('active');
    premium_title.classList.add('active');
    regular_box.style.display = "none";
    plus_box.style.display = "none";
    premium_box.style.display = "grid";
    console.log('regular radi');
})