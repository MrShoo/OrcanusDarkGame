
var warInput=document.getById("war-name");
var enterName=document.getById("enter-name);
                               
enterName.addEventListener("click", greet);

function greet(){
  var warname = (warInput.value);
  var welcomewarrior = "Greetings";
  greeting.innerHTML= welcomewarrior + warname + ".";
});

