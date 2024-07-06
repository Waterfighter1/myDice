const dice = document.getElementById("dice");
const rollBtn = document.getElementById("roll");
const endrollBtn = document.getElementById("endRoll");
const isSpin = document.getElementById("isSpinning");
const cur = document.getElementById("current");
const rolltxt = document.getElementById("rolltxt");






const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function startRoll() {
    rolltxt.classList.add("hidden");
    endrollBtn.classList.remove("hidden");
    
    btns_rollingActive();
    isSpin.innerHTML="1";
    manageRotation();
}

function stopRoll(min = 1, max = 6) {
    isSpin.innerHTML="0";
    var random = getRandom(min,max);
    displayFace(random);
    rolltxt.classList.remove("hidden");
    endrollBtn.classList.add("hidden");
    rolltxt.innerHTML = "Congrats, you rolled a " + random + "!";
}

function getRandom(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function btns_rollingActive() {
    document.getElementById("roll").classList.add("hidden");
    document.getElementById("endRoll").classList.remove("hidden");
}

function btns_rollingInactive() {
    document.getElementById("endRoll").classList.add("hidden");
    document.getElementById("roll").classList.remove("hidden");
}

async function manageRotation() {
    current = [0,1]
    while (isSpin.innerHTML == "1"){
        current = rotate(current);
        
        await sleep(200);
    }
    btns_rollingInactive();
}

function rotate(current) {
    if (current[0] >= 2000 && current[1] == 1) {
        current[1] = 0;
        current[0] -= 90;
    }
    else if (current[1] == 1) {
        current[0] += 90;
    }
    else if (current[0] <= -2000 && current[1] == 0) {
        current[1] = 1;
        current[0] += 90;
    }
    else if (current[1] == 0) {
        current[0] -= 90;
    }
    else {
        current[0] += 90
    }
    
    dice.style.transform = 'rotateX('+ current[0] +'deg) rotateY(45deg) rotateZ('+ current[0] / 2+'deg)'
    cur.innerHTML = current[0];
    
    return current
}

function displayFace(faceNum) {
    console.log(faceNum)
    currentRotation = cur.innerHTML;
    
    multiplier = 0;
    
    while (currentRotation > 360) {
        currentRotation -= 360;
        multiplier++;
    }
    
    destinationX = 0;
    destinationY = 0;
    
    // Ask Anthony Which Version!
    /*
    switch(faceNum) {
    case 1:
    destinationX = (360 * multiplier)
    destinationY = (360 * multiplier)
    break;
    case 2:
    destinationX = 270 + (360 * multiplier);
    destinationY = (360 * multiplier)
    break;
    case 3:
    destinationX = (360 * multiplier)
    destinationY = 90 + (360 * multiplier);
    break;
    case 4:
    destinationX = (360 * multiplier)
    destinationY = 270 + (360 * multiplier);
    break;
    case 5:
    destinationX = 90 + (360 * multiplier);
    destinationY = (360 * multiplier)
    break;
    case 6:
    destinationX = 180 + (360 * multiplier);
    destinationY = (360 * multiplier)
    break;
    default:
    
    break;
    }*/
    
    switch(faceNum) {
        case 1:
            destinationX = (360 * multiplier)
            destinationY = 0
            break;
        case 2:
            destinationX = 270 + (360 * multiplier);
            destinationY = 0
            break;
        case 3:
            destinationX = (360 * multiplier)
            destinationY = 90
            break;
        case 4:
            destinationX = (360 * multiplier)
            destinationY = 270
            break;
        case 5:
            destinationX = 90 + (360 * multiplier);
            destinationY = 0
            break;
        case 6:
            destinationX = 180 + (360 * multiplier);
            destinationY = 0
            break;
        default:
        
            break;
    }
    
    dice.style.transform = 'rotateX('+ destinationX + 'deg) rotateY('+ destinationY + 'deg) rotateZ('+ (360 * multiplier) +'deg)'
}







/*
async function manageRotation() {
currentRotation = [360,360]
while (isSpin.innerHTML == "1"){
current = rotate(currentRotation[0], currentRotation[1]);
await sleep(500);
}
btns_rollingInactive();
}

function rotate(currentX, currentY) {
var mima_X = determinMinMax(currentX);
var mima_Y = determinMinMax(currentY);

// dice.style.transform = 'rotateX('+ getRandom(0,719) +'deg) rotateY('+ getRandom(0,719) +'deg)'
dice.style.transform = 'rotateX('+ getRandom(mima_X[0],mima_X[1]) +'deg) rotateY('+ getRandom(mima_Y[0],mima_X[1]) +'deg)'
}

function determinMinMax(current) {
min = 0;
max = 0;
if ((current + 90) <= 720) {
// If in safe range
if ((current - 90) >= 0) {
max = current + 90;
min = current - 90;
}
// If two small
else {
min = current + 45;
max = current + 180;
}
}
// If two big
else {
max = current - 45;
min = current - 180;
}
return [min, max]
}


function displayFace(faceNum) {
// 1(0,0) 2(270,0) 3(0,90) 4(0,270) 5(90,0) 6(180,0)

switch(faceNum) {
case 1:
dice.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
break;
case 2:
dice.style.transform = 'rotateX(270deg) rotateY(0deg) rotateZ(0deg)'
break;
case 3:
dice.style.transform = 'rotateX(0deg) rotateY(90deg) rotateZ(0deg)'
break;
case 4:
dice.style.transform = 'rotateX(0deg) rotateY(270deg) rotateZ(0deg)'
break;
case 5:
dice.style.transform = 'rotateX(90deg) rotateY(0deg) rotateZ(0deg)'
break;
case 6:
dice.style.transform = 'rotateX(180deg) rotateY(0deg) rotateZ(0deg)'
break;
default:

break;
}
}
*/