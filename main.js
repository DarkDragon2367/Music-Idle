var gameData = {
    music: 0,
    notesPerClick: 1,
    notesPerClickCost: 10
  }
  
function createNote() {
    gameData.music += gameData.notesPerClick
    document.getElementById("musicMade").innerHTML = gameData.music + " Notes Made"
  }

function buyNotesPerClick() {
    if (gameData.music >= gameData.notesPerClick) {
        gameData.music -= gameData.notesPerClickCost
        gameData.notesPerClick += 1
        gameData.notesPerClick *= 2
        document.getElementById("musicMade").innerHTML = gameData.music + " Notes Made"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Sheet Music(Level 1 " + gameData.notesPerClick + ") Cost: " + gameData.notesPerClickCost + " Music"
    }

var mainGameLoop = window.setInterval(function() {
    createNote()
    }, 1000)
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("MusicIdleSave", JSON.stringify(gameData))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("MusicIdleSave"))
  if (savegame !== null) {
    gameData = savegame
  }