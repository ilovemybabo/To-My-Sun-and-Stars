// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

// Event listeners for next and prev buttons
nextDom.onclick = function() {
    showSlider('next');    
}

prevDom.onclick = function() {
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext);

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove any previous animations (reset classes)
    SliderItemsDom.forEach(item => {
        item.querySelector('.content').style.animation = 'none';  // Reset animation
    });

    // Apply animation for the new active item
    let currentItem = SliderItemsDom[0];  // First item in the list after the change
    let content = currentItem.querySelector('.content');
    content.style.animation = 'showContent 0.5s 1s linear forwards';  // Reapply the animation

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext);
}
