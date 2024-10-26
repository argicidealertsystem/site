const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Color_icon_blue.svg/1200px-Color_icon_blue.svg.png', // Fixed closing quote
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Color_icon_red.png' // Fixed closing quote
];

function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];

    // Set the random image as the header background
    document.getElementById('header').style.backgroundImage = `url('${randomImageUrl}')`;
}

// Set a random image on page load
window.onload = setRandomImage;
