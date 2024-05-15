// class active
const navbarMenu = document.querySelector('.navbar_menu');
document.querySelector('#bar_menu').onclick = () => {
    navbarMenu.classList.toggle('active');
}


const barMenu = document.querySelector('#bar_menu');
document.addEventListener('click', function(e) {
    if(!barMenu.contains(e.target) && ! navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});


let searchBtn = document.querySelector('#btn_search');
let searchBox = document.querySelector('.searchBox');
let closeBtn = document.querySelector('#close_search');
searchBtn.onclick = function() {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');

}
closeBtn.onclick = function() {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
}


let list_bg = document.querySelector('.slider_bg .list_bg');
let item_bg = document.querySelectorAll('.slider_bg .list_bg .item_bg');
let dots_bg = document.querySelectorAll('.slider_bg .dots_slider li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = item_bg.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    }else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    }else {
        active = active - 1;
    }
    reloadSlider();
}
function reloadSlider() {
    let checkleft = item_bg[active].offsetLeft;
    list_bg.style.left = -checkleft + 'px';

    let LastActiveDots_bg = document.querySelectorAll('.slider_bg .dots_slider li.active');
    LastActiveDots_bg.classList.remove('active');
    dots_bg[active].classList.add('active');
}



const hearts = document.querySelectorAll('.desc i.fa-heart');
  
hearts.forEach(heart => {
    heart.addEventListener('click', function(event) {
        event.stopPropagation(); // Menghentikan event propagasi ke atas
        if (this.style.color === 'red') {
            this.style.color = 'white';
        } else {
            this.style.color = 'red';
        }
    });
});

const galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => {
    gallery.addEventListener('click', function() {
        window.location.href = this.querySelector('a').getAttribute('href');
    });
});