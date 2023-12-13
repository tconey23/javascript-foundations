function createDragon(dragonName,riderName, dragonTemper){
  var dragon = {
    name: dragonName,
    rider: riderName,
    temperment: dragonTemper,
    timesEaten: 0,
    hungry: true,
    fireBreather: null
  };

  if(dragonTemper === "aggressive"){
    dragon.fireBreather = true
  } else {
    dragon.fireBreather = false
  }
    return dragon
}

function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

function eat(dragon){
  switch(dragon.timesEaten){
    case 0: dragon.timesEaten = 1
            dragon.hungry = true
    break;
    case 1: dragon.timesEaten = 2
            dragon.hungry = true
    break;
    case 2: dragon.timesEaten = 3
            dragon.hungry = false
    break;
  }
    return dragon
}

function findFireBreathers(dragonArray){
  var fireBreathers = []
  for(var i=0; i < dragonArray.length; i++){
    if(dragonArray[i].fireBreather === true){
      console.log(dragonArray[i].fireBreather)
      fireBreathers.push(dragonArray[i])
    }
  }
  return fireBreathers
}



module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}