function createAirport(airportName, airlines, availGates) {
  var airport = {
    name: airportName,
    availableGates: availGates,
    airlines: airlines,
    message: ""
  }
  return airport
}

function welcomeGuests(airport) {
    return `Welcome to ${airport.name}!`
}

function landPlanes(airport, occupiedGates) {
  var remGates = (airport.availableGates - occupiedGates)
  airport.availableGates = remGates
  if(remGates < 1) {
    airport.availableGates = 0
    airport.message = `Oh no! Not enough gates available. Current overflow is ${remGates*-1}.`
  } else {
    airport.message = `Success! Current availability is ${remGates}.`
  }
  return airport
}

function checkAirlineLocations(allAirports,airline) {
    var carrierAirports = []
    for(i = 0; i < allAirports.length; i++) {
      if(allAirports[i].airlines.includes(airline) == true) {
        carrierAirports.push(allAirports[i].name)
      }
  }
  return carrierAirports
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
