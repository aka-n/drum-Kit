//detecting mouse click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btn=this.innerHTML;
    makeSound(btn);
    animation(btn);
	    });
}

//detecting key button press
  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    animation(event.key);
	    });

function makeSound(key){
  switch(key){
        case "w" :
          var tom1=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/tom-1.mp3?raw=true");
tom1.play();
        break;
        case "a" :
          var tom2=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/tom-2.mp3?raw=true");
tom2.play();
        break;
        case "s" :
          var tom3=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/tom-3.mp3?raw=true");
tom3.play();
        break;
      case "d" :
          var tom4=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/tom-4.mp3?raw=true");
tom4.play();
        break;
        case "j" :
          var snare=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/snare.mp3?raw=true");
snare.play();
        break;
        case "k" :
          var crash=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/crash.mp3?raw=true");
crash.play();
        break;
        case "l" :
          var kickbass=new Audio("https://github.com/aka-n/drum-Kit/blob/main/sounds/kick-bass.mp3?raw=true");
kickbass.play();
        break;
      default:
        console.log(key);
    }
}

function animation(currentKey){
 var activeBtn =
 document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");
  
  setTimeout( function(){
  activeBtn.classList.remove("pressed");
  }, 400);
}


