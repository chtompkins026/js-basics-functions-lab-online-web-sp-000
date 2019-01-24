// Code your solution in this file!

function distanceFromHqInBlocks(destination){ 
  if(destination >= 42){ 
    return destination - 42; 
  } else { 
    return 42 - destination; 
  }
} 

function distanceFromHqInFeet (destination) {
  return distanceFromHqInBlocks(destination) * 264; 
}

function distanceTravelledInFeet() { 
  
}