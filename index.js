

  // Detecting button press

for ( var i = 0; i<document.querySelectorAll(".drum").length; i++)  // i will loop untill it is less than the number of elements with class name drum.
  {
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
      {
        var buttonInnerHtml = this.innerHTML; // if a button was pressed, check the inner html of the button that got presssed
        makeSound(buttonInnerHtml);           // and send it to makeSound function in order to play the relevant sound.
        buttonAnimation(buttonInnerHtml);     // for animation of the buttons after clicking.
      } );
  }


  // Detecting key board press


  document.addEventListener("keypress",function(event)    // event is the key which triggered the "keypress"
  {
    makeSound(event.key);   //that event contains the property "key" which tells us whick keyboard key was pressed & send it to makeSound.
    buttonAnimation(event.key); // for animation when any keyboard button press.
  });

  function makeSound(key)   // we switch on the key parameter and play according to which sound was clicked or which button was pressed.
    {
      switch (key)
        {                                     // switching the button on and off
          case "w":                           // first value of button is "w"
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;                               // breaks the first case and switchs on to the next case.
          case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;
          case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;
          case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
          break;
          case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
          break;
          case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
          break;
          case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
          break;

          default: console.log(buttonInnerHtml);
        }
    }

function buttonAnimation(currentKey)
  {
    var activeButton = document.querySelector("."+currentKey); // the active button, which is found by the current button we are pressing.
    activeButton.classList.add("pressed");  // adding a predefined css class to our existing classList, changes the style of our button after we press it.
    setTimeout(function() {                // removes the pressed style after a time delay of 300.
      activeButton.classList.remove("pressed");
    }, 5);
  }
 
