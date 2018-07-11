var playlist = {'Aphex Twin': 'Cow Cud Is A Twin'}

function updatePlaylist(obj, artist, song) {
  return obj.[artist] = song
}

updatePlaylist(playlist, 'Bonobo', 'Eyesdown')

console.log(playlist)