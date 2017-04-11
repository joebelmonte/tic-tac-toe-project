let gameBoard = []
let activePlayer = 1

const newGame = function () {
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  activePlayer = 1
}

module.exports = {
  newGame
}
