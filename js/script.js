// JavaScript
document.getElementById('home-btn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll halus ke atas
});

document.getElementById('package-btn').addEventListener('click', function() {
    const packageSection = document.querySelector('.our-package-content');
    packageSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function() {
    const contactSection = document.querySelector('.core-item.item-right');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-btn').addEventListener('click', function() {
    window.location.href = 'contact.html'; 
});

function validation() {
    const inputElement = document.getElementById('form-username');
    const username = inputElement.value;

    if (username === '' || username === null) {
        inputElement.style.border = '1px solid red'; 
        alert('Your Input Is Empty, Check Again');
    } else {
        inputElement.style.border = ''; 
        alert('Welcome ' + username);
    }
}

document.getElementById('form-username').addEventListener('input', function() {
    this.style.border = ''; 
});

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
    
}

//Slide Logic
function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Banyaknya image: ' + listImage.length);

    // Reset SlideIndex
    if (index > listImage.length) indexSlide = 1;
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    listImage[indexSlide - 1].style.display = 'block';

    console.log('showSlide: ' + index);
}

setInterval(() => nextSlide(1), 5000);

document.getElementById('send-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    validation();
    nextSlide(1);  
});