var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2')
var doorImage3 = document.getElementById('door3')

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"

let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"

let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"


let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreGenerator = () => {
  numClosedDoors = 3;
  const choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  } else (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }

}

doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
  
}

doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
  
}

doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
  
}