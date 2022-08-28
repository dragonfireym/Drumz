





document.addEventListener("keydown", function(event){
  act(event.key);
  animate(event.key);
});



for (var i = 0; i < 8; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

act(this.innerText);
animate(this.innerText);

  });
}




function act(key){

  switch (key) {
    case "w":
    var sound = new Audio ("sounds/Headshot-Amp.mp3");
    sound.play();
      break;


    case "a":
    var sound = new Audio ("sounds/grudge-web.mp3");
    sound.play();
      break;


    case "s":
    var sound = new Audio ("sounds/ahh.mp3");
    sound.play();
      break;


    case "d":
    var sound = new Audio ("sounds/tom-4.mp3");
    sound.play();
      break;


    case "k":
    var sound = new Audio ("sounds/kick-bass.mp3");
    sound.play();
      break;


    case "j":
    var sound = new Audio ("sounds/crash.mp3");
    sound.play();
      break;


    case "l":
    var sound = new Audio ("sounds/snare.mp3");
    sound.play();
      break;

    case "Afta7 ALsama":
    var bg_sound = new Audio("sounds/sama.mp3");
    bg_sound.play();
     bg_sound.volume = 0.5;
      break;




    default:
    var nothing;
}
}


function animate(key){

  var chosen = document.querySelector("."+key);
  chosen.classList.add("pressed");

  setTimeout(function(){
  chosen.classList.remove("pressed");
}, 101);

}
