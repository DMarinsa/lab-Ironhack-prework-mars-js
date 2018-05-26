
// Definition of objects, in this case Mars a bidimensional 
// array of elements and two Rovers
let roverOne = {
    direction: "N",
    positionX: 0,
    positionY: 0,
    travelLog: []
  }
  let roverTwo = {
    direction: "N",
    positionX: 9,
    positionY: 9,
    travelLog: []
  }
  
  let rock = {
    description: "nothing, this is just a rock"
  }

  let mars =  [
    [null, null, rock, null, null, null, null, null, null, roverTwo],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, rock, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, rock, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, rock, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [roverOne, null, null, null, null, null, null, null, null, null],
  ]
  
  //function used to know if the next space in array is empty to move into
  function isEmpty(rover, mars){
    if(mars[rover.positionX][rover.positionY]){
      return false;
    } else {
      return true;
    }
  }
  
  // function used to move in the bidimensional array in the Y axis
  function marsMovementYPositive(rover, mars){
    mars[rover.positionX][rover.positionY+1] = mars[rover.positionX][rover.positionY];
    mars[rover.positionX][rover.positionY] = null;
  }
  
  // function used to move in the bidimensional array in the X axis
  function marsMovementXPositive(rover, mars){
    mars[rover.positionX+1][rover.positionY] = mars[rover.positionX][rover.positionY];
    mars[rover.positionX][rover.positionY] = null;
  }
  
  // function used to move in the bidimensional array in the Y axis
  function marsMovementYNegative(rover, mars){
    mars[rover.positionX][rover.positionY-1] = mars[rover.positionX][rover.positionY];
    mars[rover.positionX][rover.positionY] = null;
  }
  
  // function used to move in the bidimensional array in the X axis
  function marsMovementXNegative(rover, mars){
    mars[rover.positionX-1][rover.positionY] = mars[rover.positionX][rover.positionY];
    mars[rover.positionX][rover.positionY] = null;
  }
  
  // function to turn to the left uses a switch statement to check the actual value
  // and then sets a new one
  
  function turnLeft(rover){
    switch(rover.direction){
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
    console.log("Rover Orientation is :", rover.direction);
  }
  
  //same as turnLeft but turns to the right
  
  function turnRight(rover){
    switch(rover.direction){
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
    console.log("Rover Orientation is :", rover.direction);
  }
  
  // function used to move the rover backward, it reads the actual direction and then
  // adds or substracts the X or Y coordinate deppending of which direction is moving.
  
  function moveBackward(rover){
    switch(rover.direction){
      case "N":
        if(rover.positionY > 0){
          rover.positionY -= 1;
          if(isEmpty(rover,mars)){
            marsMovementYNegative(rover,mars);
          }else {
            rover.positionY += 1;
            console.log('Position is not avalaible');
          }
          } else {
            alert('You are at the southern edge');
          }
        break;
  
      case "E":
        if(rover.positionX > 0){
          rover.positionX -= 1;
          if(isEmpty(rover,mars)){
            marsMovementXNegative(rover,mars);
          }else {
            rover.positionX += 1;
            console.log('Position is not avalaible');
          }
        } else {
          alert('You are at the western edge')
        }
        break;
      case "S":
        if(rover.positionY < 9){
          rover.positionY += 1;
          if(isEmpty(rover,mars)){
            marsMovementYPositive(rover,mars);
          }else {
            rover.positionY -= 1;
            console.log('Position is not avalaible');
          }
        } else {
          alert('You are at the northern edge');
        } 
        break;
      case "W":
        if(rover.positionX < 9){
          rover.positionX += 1;
          if(isEmpty(rover,mars)){
            marsMovementXPositive(rover,mars);
          }else {
            rover.positionX -= 1;
            console.log('Position is not avalaible');
          }
        } else {
          alert('You are at the eastern edge')
        }
        break;
    }
    logPosition(rover);
  }
  
  // Same as moving backward
  
  function moveForward(rover, mars){
    switch(rover.direction){
      case "N":
        if(rover.positionY < 9){
          rover.positionY += 1;
          if(isEmpty(rover,mars)){
            marsMovementYPositive(rover,mars);
          }else {
            rover.positionY -= 1;
            console.log('Position is not avalaible');
          }
        } else {
          alert('You are at the northern edge');
        } 
        break;
  
      case "E":
        if(rover.positionX < 9){
          rover.positionX += 1;
          if(isEmpty(rover,mars)){
            marsMovementXPositive(rover,mars);
          }else {
            rover.positionX -= 1;
            console.log('Position is not avalaible');
          }
        } else {
          alert('You are at the eastern edge')
        }
        break;
      case "S":
        if(rover.positionY > 0){
          rover.positionY -= 1;
          if(isEmpty(rover,mars)){
            marsMovementYNegative(rover,mars);
          }else {
            rover.positionY += 1;
            console.log('Position is not avalaible');
          }
          } else {
            alert('You are at the southern edge');
          }
        break;
      case "W":
        if(rover.positionX > 0){
          rover.positionX -= 1;
          if(isEmpty(rover,mars)){
            marsMovementXNegative(rover,mars);
          }else {
            rover.positionX += 1;
            console.log('Position is not avalaible');
          }
        } else {
          alert('You are at the western edge')
        }
        break;
    }
    logPosition(rover);
  }
  
  // function used to push your actual position into the travel log array
  function logPosition(rover){
    let position=rover.positionX+","+rover.positionY;
    rover.travelLog.push(position);
    console.log('Position of Rover is: ', rover.positionX, rover.positionY);
  }
  
  
  // function used to validate the input in a movement Chain
  // it reads the whole string and if one of the characters
  // is different from f,b,l or r it returns false
  
  function validateInput(ordersString){
    let order, isValid;
    for(let i=0; i<ordersString.length;i++){
      order = ordersString.charAt(i);
      if(order != 'f' && order != 'r' && order!= 'l' && order != 'b' ){
        isValid = false;
      } else {
        isValid = true;
      }
    }
    return isValid;
  }
  
  // function used to receive an string of movements orders and execute them
  // one after the other in case you set a wrong order it will set up an alert
  // warning about the wrong orders
  function movementChain(movement, rover, mars){
    let order;
    if(validateInput(movement)){
      for(let i=0; i<movement.length; i++){
        order = movement.charAt(i);
        switch(order){
          case 'f':
            moveForward(rover, mars);
            break;
          case 'l':
            turnLeft(rover, mars);
            break;
          case 'r':
            turnRight(rover, mars);
            break;
          case 'b':
            moveBackward(rover, mars);
            break;
        }
      }
    } else {
      alert('WRONG ORDERS!');
    }
  }
