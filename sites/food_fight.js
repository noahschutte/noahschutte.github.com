window.onload = function(e) {
	var mashedPotatoes = document.getElementById("mashed_potatoes");
	var meatloaf = document.getElementById("meatloaf");
	var text = document.getElementById("prompt");

	meatloaf.addEventListener("click", function throwMeatloaf() {
 	text.innerHTML = "You hit a teacher, enjoy your time in detention."
  mashedPotatoes.innerHTML = "Play Again?"
  mashedPotatoes.value = "game_over"
  document.getElementById("meatloaf").style.display="none";
  })

 mashedPotatoes.addEventListener("click", function throwMashedPotatoes() {
  if(mashedPotatoes.value === "unclicked") {
   text.innerHTML = "You nailed the bully in the face with a pile of mashed potatoes! You win this battle.";
   mashedPotatoes.innerHTML = "Play Again?"
   mashedPotatoes.value = "game_over"
   document.getElementById("meatloaf").style.display="none";
  }
  else if(mashedPotatoes.value === "game_over") {
   reset();
  }
 })

 function reset() {
 	document.getElementById("meatloaf").style.display="block";
  mashedPotatoes.innerHTML = "Throw mashed potatoes!"
  mashedPotatoes.value = "unclicked"
  text.innerHTML = "A bully just insulted you in front of your friends. You've got a tray full of mashed potatoes and meatloaf. What would you like to do?"
 }
}