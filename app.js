function isCool() {
  let likesDogs = confirm("Do you like Dogs?");
  return likesDogs;
}

function forCoolFolks() {
  const defaultAnswer = "Fido";

  let response = prompt('What\'s your favorite dogs name?', defaultAnswer);

  while (response.length == 0) {
    response = prompt('Please enter a valid name for your dog', defaultAnswer);
  }

  document.write('You like dogs, and your favorite dogs name is ' + response + '.');

}

let imageIndex = 1; // Start with the first image

function cycleImages() {
  let imageElement = document.getElementById("displayImage");
  let captionElement = document.getElementById("caption");

  if (imageIndex === 1) {
    imageElement.src = "rescue_kittens.png";
    captionElement.textContent = "Dogs can rescue kittens";
    imageIndex = 2;
  } else {
    imageElement.src = "steak_dinner.png";
    captionElement.textContent = "Dogs can cook steak for kittens";
    imageIndex = 1;
  }
}



function uncoolFolksGoHere() {
  document.write("I'm sorry, this page cannot be as cool as it could be, because you prefer the wrong species...<p>");
}


// if (isCool()) {
//   document.write('<button onclick="cycleImages()">Change Image</button>')
//   // forCoolFolks()  
// // } else {
//   // uncoolFolksGoHere()
// }

// const defaultAnswer = "I don't have one";
// let name = prompt("What's your favorite dogs name?", defaultAnswer);

// if (name === defaultAnswer) {
//   document.write("You don't like dogs, shame on you!");
// } else {
//   document.write("You like dogs and " + name.toUpperCase() + " is a good boy");
// }

// let chosenColor = "red";
// let color = prompt("What color would you like to change the background to?", chosenColor)

// let mainElement = document.getElementById("myMain")
// mainElement.style.backgroundColor = color
