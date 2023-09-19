$(document).ready(function(){
    $('.parallax').parallax();
  });


let tags = document.querySelectorAll("strong");

tags.forEach((tag) =>{
    tag.addEventListener("click", (e)=>{
        let msg = new SpeechSynthesisUtterance("hello");
        msg.text = e.target.innerText;
        speechSynthesis.speak(msg);
    })
})