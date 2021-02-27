const items = document.querySelectorAll('.gallery a');
let currentIndex = 0;

setInterval(() => {
    items[currentIndex++].style.display = 'none';
    if(currentIndex === items.length){
        currentIndex = 0;
    }
    items[currentIndex].style.display = 'block';
}, 3000);