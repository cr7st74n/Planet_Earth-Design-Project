$(document).ready(function(){
    $('.parallax').parallax();
  });


let tagsEn = document.querySelectorAll(".English");

voices = window.speechSynthesis.getVoices()
tagsEn.forEach((tag) =>{
    tag.addEventListener("click", (e)=>{
        let msg = new SpeechSynthesisUtterance("hello");
        msg.text = e.target.innerText;
        speechSynthesis.speak(msg);
    })
})

let tagsEs = document.querySelectorAll(".Spanish")
const utterance = new SpeechSynthesisUtterance();

tagsEs.forEach((tag)=>{
    tag.addEventListener("click", (e)=>{
        utterance.text = e.target.innerText;
        // Set the language to Spanish (Spain)
        utterance.lang = 'es-ES'; // 'es-ES' represents Spanish (Spain)
        // Use a specific voice (optional)
        const voicesEs = speechSynthesis.getVoices();
        utterance.voice = voicesEs.find(voice => voice.lang === 'es-ES');

        // Speak the text
        speechSynthesis.speak(utterance);
    })
})

// Get a reference to the image and button
const image = document.getElementById("ImgEarth");
const button = document.getElementById("btnRotation");

// Add a click event listener to the button
button.addEventListener("click", function() {
  image.src = "CSS/img/earth_gif.gif"; // Replace "image2.jpg" with the path to your new image
});

const image2 = document.getElementById("ImgEarth");
const button2 = document.getElementById("btnSun");

// Add a click event listener to the button
button2.addEventListener("click", function() {
  image2.src = "https://media.giphy.com/media/ctGFLebG1AqK4/giphy.gif"; // Replace "image2.jpg" with the path to your new image
});

const image3 = document.getElementById("ImgEarth");
const button3 = document.getElementById("btnStar");

// Add a click event listener to the button
button3.addEventListener("click", function() {
  image3.src = "https://media.giphy.com/media/l1Et7Qw1XjvunS0Io/giphy.gif"; // Replace "image2.jpg" with the path to your new image
});

const image4 = document.getElementById("ImgEarth");
const button4 = document.getElementById("btnWorld");

// Add a click event listener to the button
button4.addEventListener("click", function() {
  image4.src = "https://media.giphy.com/media/bXhiABcqQGT3W/giphy-downsized-large.gif"; // Replace "image2.jpg" with the path to your new image
});

const image5 = document.getElementById("ImgEarth");
const button5 = document.getElementById("btnOrb");

// Add a click event listener to the button
button5.addEventListener("click", function() {
  image5.src = "https://media.giphy.com/media/yRFAJEf24Jk5y/giphy.gif"; // Replace "image2.jpg" with the path to your new image
});

const image6 = document.getElementById("ImgEarth");
const button6 = document.getElementById("btnBack");

// Add a click event listener to the button
button6.addEventListener("click", function() {
  image6.src = "CSS/img/planet.png"; // Replace "image2.jpg" with the path to your new image
});

const image7 = document.getElementById("ImgEarth");
const button7 = document.getElementById("btnMoon");

// Add a click event listener to the button
button7.addEventListener("click", function() {
  image7.src = "https://media.giphy.com/media/AzmkkdTu6COze/giphy.gif"; // Replace "image2.jpg" with the path to your new image
});

const image8 = document.getElementById("ImgEarth");
const button8 = document.getElementById("btnWow");

// Add a click event listener to the button
button8.addEventListener("click", function() {
  image8.src = "https://media.giphy.com/media/cLkg857UN0y4ISQoTT/giphy-downsized-large.gif"; // Replace "image2.jpg" with the path to your new image
});






