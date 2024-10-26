const images = [
    'https://i.4cdn.org/v/1729836218706979.jpg',  // Replace with your image URLs
    'https://i.4cdn.org/v/1729833928022460.jpg',
    'image3.jpg',
    'image4.jpg'
];

function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    document.getElementById('randomImage').src = randomImageUrl;
}

// Set a random image on page load
window.onload = setRandomImage;
