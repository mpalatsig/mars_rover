// creating rover vehicle 1
var myRover1 = {
  position: [0,0],
  name: 'Rover1',
  direction: 'N'
};

// creating rover vehicle 2
var myRover2 = {
  position: [8,8],
  name: 'Rover2',
  direction: 'S'
};

// creating moon grid the grid
var moonGrid = [];
for(var x = 0; x < 10; x++){
    moonGrid[x] = [];
    for(var y = 0; y < 10; y++){
        moonGrid[x][y] = 0;
    }
}

//adding 3 obstacles in coordinates [0,9], [9,0] and [5,5]
moonGrid[0][9] = 1;
moonGrid[9][0] = 1;
moonGrid[5][5] = 1;

// function to go forward
function goForward(rover) {
  var messageObstacleFront = "There is an obstacle in the next coordenates. I can't continue moving";
  var messageOutOfGrid = "I can't continue, the grid finished";
  switch(rover.direction) {
    case 'N':
      if (moonGrid[rover.position[0]][rover.position[1]+1]===1 || moonGrid[rover.position[0]][rover.position[1]+1]===2) {
        console.log(messageObstacleFront);
      } else if (rover.position[1] > 9) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[1]++;
        moonGrid[rover.position[0]].splice(rover.position[1]-1,1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
    case 'E':
      if (moonGrid[rover.position[0]+1][rover.position[1]]===1 || moonGrid[rover.position[0]+1][rover.position[1]]===2) {
        console.log(messageObstacleFront);
      } else if (rover.position[0] > 9) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[0]++;
        moonGrid[rover.position[0]-1].splice(rover.position[1],1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
    case 'S':
      if (moonGrid[rover.position[0]][rover.position[1]-1]===1 || moonGrid[rover.position[0]][rover.position[1]-1]===2) {
        console.log(messageObstacleFront);
      } else if (rover.position[1] < 1) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[1]--;
        moonGrid[rover.position[0]].splice(rover.position[1]+1,1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
    case 'W':
      if (moonGrid[rover.position[0]-1][rover.position[1]]===1 || moonGrid[rover.position[0]-1][rover.position[1]]===2) {
        console.log(messageObstacleFront);
      } else if (rover.position[0] < 1) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[0]--;
        moonGrid[rover.position[0]+1].splice(rover.position[1],1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
  }
  console.log("New "+ rover.name + " position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

// function to go backwards
function goBackward(rover) {
  var messageObstacleBack = "There is an obstacle in the next coordenates. I can't continue moving";
  var messageOutOfGrid = "I can't continue, the grid finished";
  switch (rover.direction) {
    case "N":
      if (moonGrid[rover.position[0]][rover.position[1]-1]===1 || moonGrid[rover.position[0]][rover.position[1]-1]===2) {
        console.log(messageObstacleBack);
      } else if (rover.position[1] < 1) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[1]--;
        moonGrid[rover.position[0]].splice(rover.position[1]+1,1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
    case "E":
      if (moonGrid[rover.position[0]-1][rover.position[1]]===1 || moonGrid[rover.position[0]-1][rover.position[1]]===2) {
        console.log(messageObstacleBack);
      } else if (rover.position[0] < 1) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[0]--;
        moonGrid[rover.position[0]+1].splice(rover.position[1],1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
    case "S":
      if (moonGrid[rover.position[0]][rover.position[1]+1]===1 || moonGrid[rover.position[0]][rover.position[1]+1]===2) {
        console.log(messageObstacleBack);
      } else if (rover.position[1] > 9) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[1]++;
        moonGrid[rover.position[0]].splice(rover.position[1]-1,1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
    case "W":
      if (moonGrid[rover.position[0]+1][rover.position[1]]===1 || moonGrid[rover.position[0]+1][rover.position[1]]===2) {
        console.log(messageObstacleBack);
      } else if (rover.position[0] > 9) {
        console.log(messageOutOfGrid);
      } else {
        rover.position[0]++;
        moonGrid[rover.position[0]-1].splice(rover.position[1],1,3);
        moonGrid[rover.position[0]].splice(rover.position[1],1,2);
      }
      break;
  }
  console.log("New "+ rover.name + " position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

// function to turn right
function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("New " + rover.name + " direction: " + rover.direction);
}

// function to turn left
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("New " + rover.name + " direction: " + rover.direction);
}

//function to start moving myRover1
function startMoveRover1() {
  if (yourName === false || yourName === undefined) {
    askName(myRover1);
  }
  var nextMoveInstructions = prompt("Hi " + yourName + ", where do you want myRover1 to move next?","Use f,b,r,l for Forward, Backward, Right and Left");
  var txt = "Hi " + yourName + " , you just ordered myRover1 to go " + nextMoveInstructions;

  document.getElementById("demo").innerHTML = txt;
  //here I split the movement instrucctions into elements of an array
  var listOfLetters = nextMoveInstructions.split("");
  // this is a loop for create a movenment for every element of the movement array
  for (var i = 0; i < listOfLetters.length; i++) {
      var moveToOrder = listOfLetters[i];
      switch (moveToOrder) {
        case "f":
          goForward(myRover1);
          break;
        case "b":
          goBackward(myRover1);
          break;
        case "r":
            turnRight(myRover1);
          break;
        case "l":
            turnLeft(myRover1);
          break;
        default:
          console.log("I don't understant your instructions " + moveToOrder +" , please use f, b, r, l in order to control me");
      }
    }
}

//same as function for moving myRover1, here the function to start moving myRover2
function startMoveRover2() {
  if (yourName === false || yourName === undefined) {
    askName(myRover2);
  }
  var nextMoveInstructions = prompt("Hi " + yourName + ", where do you want myRover2 to move next?","Use f,b,r,l for Forward, Backward, Right and Left");
  var txt = "Hi " + yourName + " , you just ordered myRover2 to go " + nextMoveInstructions;

  document.getElementById("demo").innerHTML = txt;

  var listOfLetters = nextMoveInstructions.split("");

  for (var i = 0; i < listOfLetters.length; i++) {
      var moveToOrder = listOfLetters[i];
      switch (moveToOrder) {
        case "f":
          goForward(myRover2);
          break;
        case "b":
          goBackward(myRover2);
          break;
        case "r":
            turnRight(myRover2);
          break;
        case "l":
            turnLeft(myRover2);
          break;
        default:
          console.log("I don't understant your instructions " + moveToOrder +" , please use f, b, r, l in order to control me");
      }
    }
}
// here I print the initial coordinates from both rovers and their direction
console.log("Current Rover1 coordinates [" + myRover1.position + "], facing " + myRover1.direction);
console.log("Current Rover2 coordinates [" + myRover2.position + "], facing " + myRover2.direction);

var yourName;
function askName(rover) {
  yourName = prompt("Hi my friend, I'm " + rover.name + ", what's your name?");
}
