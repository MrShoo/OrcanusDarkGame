
var warInput=document.getById("war-name");
var enterName=document.getById("enter-name);
                               
enterName.addEventListener("click", function (){
  var warname = (warInput.value);
  var welcomewarrior = "Greetings"
  greeting.innerHTML= welcomewarrior + warname + ".";
});

