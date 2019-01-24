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

function distanceTravelledInFeet(d1, d2) { 
  if (d1 >= d2) { 
    return (d1 - d2) * 264 ;
  } else { 
    return (d2 - d1) * 264 ;
  }
}


function calculatesFarePrice(start, destination) { 
   
}