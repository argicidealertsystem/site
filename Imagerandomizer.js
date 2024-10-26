const images = [
    'Random Images/blazegun.jpg', 
    'Random Images/Boost_Mobile.jpg',
	'Random Images/Supernamek.png' 
];

function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];

    // Set the random image as the header background
    document.getElementById('header').style.backgroundImage = `url('${randomImageUrl}')`;
}

// Set a random image on page load
window.onload = setRandomImage;
