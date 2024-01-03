function createVampire(vampName, petType) {
  if(petType == null) {
    petType = 'bat'
  }
  vampire = {
    name: vampName,
    pet: petType,
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire
}
function encounterDeliciousVictim(vampName) {
  if(vampName.thirsty == true) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  }
  if(vampName.ouncesDrank = 50) {
    vampName.thirsty = false
  }
}
function drink(vampName){
    vampName.ouncesDrank += 10
    if(vampName.ouncesDrank >= 50) {
      vampName.ouncesDrank = 50
      vampName.thirsty = false
    }
  return vampName
}

function encounterDeliciousVictim(vampName) {
  if(vampName.thirsty == false) {
    return `No thanks, I am too full.`
  } else {
    return `I WANT TO SUCK YOUR BLOOD!`
  }
}
function inquirePlace(locations, locName) {
  if(locations.includes(locName)) {
    return `Yes, I have spent some time in New Orleans.`
  } else {
    return `No, I have never been to Idaho.`
  }
}
function findBatLovers(vampires) {
  var batLovers = []
  for(i=0; i < vampires.length; i++) {
    if(vampires[i].pet.includes("bat")) {
      batLovers.push(vampires[i].name)
    }
  }
  return batLovers
}


module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}