function createSong(name, artist, favorite) {
  var song = {
    name: name,
    artist: artist,
    favorite: favorite,
    hasBeenPlayed: false
  }
  if(favorite == undefined) {
    song.favorite = false
  }
  return song
}
function playSong(song) {
  if(song.hasBeenPlayed == false) {
    song.hasBeenPlayed = true
  }
  return song
}
function makePlaylist(name, songs) {
  var playlist = {
    name: name,
    songs: songs
  }
  return playlist
}
function addSongToPlaylist(playList, song) {
  playList.songs.push(song)
  return playList
}
function playSongs(playListName,playType) {
  if(playType === 'favorites only') {
    for(i=0; i < playListName.songs.length; i++) {
        if(playListName.songs[i].favorite == true) {
          if(playListName.songs[i].hasBeenPlayed == false) {
            playListName.songs[i].hasBeenPlayed = true
          }
        } else {
          playListName.songs[i].hasBeenPlayed = false
        }
    }
  } else {
      for(i=0; i < playListName.songs.length; i++) {
        if(playListName.songs[i].hasBeenPlayed == false) {
          playListName.songs[i].hasBeenPlayed = true
        }
      }
    }
  return playListName
}
module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
