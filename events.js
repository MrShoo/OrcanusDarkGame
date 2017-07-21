
var warInput=document.getById("war-name");
                               
enterName.addEventListener("click", hideInputs, greet);

function hideInputs() {
    document.getElementById("the-welcome").style.visibility = "hidden";
}

function greet(){
  var warname = (warInput.value);
  var welcomewarrior = "Greetings";
  greeting.innerHTML= welcomewarrior + "" + warname + "!";
});

