// Step 1: Get DOM elements
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

// Function to start auto sliding
function startAutoSlide() {
    return setTimeout(() => {
        next.click();  // Automatically click the "Next" button
    }, timeAutoNext);
}

// Function to reset the auto slide timer
function resetAutoSlide() {
    clearTimeout(runNextAuto);  // Clear any existing auto-slide intervals
    runNextAuto = startAutoSlide();  // Restart the auto-slide timer
}

// Add event listeners for next and prev buttons
nextDom.onclick = function() {
    showSlider('next');
    resetAutoSlide();  // Reset the auto-slide timer after manual action
}

prevDom.onclick = function() {
    showSlider('prev');
    resetAutoSlide();  // Reset the auto-slide timer after manual action
}

// Function to show the slider (next or prev)
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    let currentItem;
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
        currentItem = SliderItemsDom[0]; // New item is the first in the list after append
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
        currentItem = SliderItemsDom[SliderItemsDom.length - 1]; // New item is the last in the list after prepend
    }

    // Reset animation for all slides
    SliderItemsDom.forEach(item => {
        item.querySelector('.content').style.animation = 'none';  // Reset animation
    });

    // Apply animation to the newly active item
    let content = currentItem.querySelector('.content');
    content.style.animation = 'showContent 0.5s 1s linear forwards';  // Reapply animation

    // Remove the next/prev classes after animation finishes
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

// Initial auto slide start
let runNextAuto = startAutoSlide();
