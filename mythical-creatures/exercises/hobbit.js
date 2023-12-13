function createHobbit(hobbitName,hobbitAge) {
  var hobbit = {
    name: hobbitName,
    age: hobbitAge,
    isAdult: null,
    isOld: null,
    acquaintances: []
  }
  if(hobbitAge == null) {
    hobbit.age = 0
  }
  if(hobbitName == null) {
    hobbit.name = 'unknown'
  }
  if(hobbit.age < 33) {
    hobbit.isAdult = false
  }
  if(hobbit.age < 101) {
    hobbit.isOld = false
  }
  return hobbit
}
function celebrateBirthday(hobbit) {
  hobbit.age ++
  if(hobbit.age > 32) {
    hobbit.isAdult = true
  }
  if(hobbit.age > 100) {
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit) {
  var canGetRing
  if(hobbit.name == "Frodo") {
    canGetRing = 'Here is the ring!'
  } else {
    canGetRing = 'You can\'t have it!'
  }
  return canGetRing
}

function meetPeople(hobbit,peopleMet) {
  peopleMet.forEach((element) => hobbit.acquaintances.push(element))
  return hobbit
}

function findFriends(hobbit) {
  var friends = []
    for(var i=0; i < hobbit.acquaintances.length; i++){
      if(hobbit.acquaintances[i].relationship == "friend") {
        friends.push(hobbit.acquaintances[i].name)
      }
  }
  return friends
}
module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}