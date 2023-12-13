function createCollection(collName,collDesc) {
  
  var collectionName = collName

  var collName = {
    name: collectionName,
    description: collDesc,
    tracks: []
  }

  return collName
}

function createTrack(trackName,trackArtist,trackDuration) {
  if(trackName == null || trackArtist == null || trackDuration == null) {
    var track = {
      title: 'unknown',
      artist: 'unknown',
      duration: 0
    }
  } else {
      var track = {
        title: trackName,
        artist: trackArtist,
        duration: trackDuration
      }
    }    
  return track
}

function reviewTrack(trackNum) {
  if(trackNum.artist == "Red Hot Chili Peppers") {
    var review = `The song ${trackNum.title} rules!`
  } else {
    var review = `I wish this was a Red Hot Chili Peppers song.`
  }
  return review
}

function addTrack(collName,trackNum) {
  var trackList = collName.tracks
  trackList.push(trackNum)
  return collName
}

function getTotalDuration(collName) {
  var totalDuration = 0
  for(var i=0; i < collName.tracks.length; i++) {
    totalDuration = (totalDuration + collName.tracks[i].duration)
  }
  return totalDuration
}

function findTracksByArtist(collName,trackArtist){
  var outputArray = []
  var artistTracks = collName.tracks
  for(var i=0; i < artistTracks.length;i++) {
    if(artistTracks[i].artist === trackArtist) {
      outputArray.push(artistTracks[i])
    }
  }
  return outputArray
}

  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }