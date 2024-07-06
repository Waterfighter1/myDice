const dice = document.getElementById("dice");
const rollBtn = document.getElementById("roll");

// Function to compute the product of p1 and p2
function startRoll(min = 1, max = 6) {
    // Generates a number 1 - 6 
    var random = getRandom(min,max);

   console.log("Rolled a " + random);

   /* 1(0,0) 2(270,0) 3(0,90) 4(0,270) 5(90,0) 6(180,0)*/

   switch(random) {
    case 1:
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)'
        break;
    case 2:
        dice.style.transform = 'rotateX(270deg) rotateY(0deg)'
        break;
    case 3:
        dice.style.transform = 'rotateX(0deg) rotateY(90deg)'
        break;
    case 4:
        dice.style.transform = 'rotateX(0deg) rotateY(270deg)'
        break;
    case 5:
        dice.style.transform = 'rotateX(90deg) rotateY(0deg)'
        break;
    case 6:
        dice.style.transform = 'rotateX(180deg) rotateY(0deg)'
        break;
    default:

        break;
  }
}

// Inclusive 
function getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}