// code to check if there is a winner
const fillBoard = function (array) {
  console.log('launching fillBoard')
  for (let i = 0; i === 8; i++) {
    if (array[i] === 0) {
      gameBoard[i] = 5
    }
  }
}

const checkWinner = function (gameBoard) {
  console.log('Checking for a winner using game board: ', gameBoard)
  const topRow = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const midRow = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const bottomRow = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const leftColumn = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const midColumn = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const rightColumn = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const slash = gameBoard[0] + gameBoard[1] + gameBoard[2]
  // const backSlash = gameBoard[0] + gameBoard[1] + gameBoard[2]
  if (topRow === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
  }
  if (topRow === -3) {
    console.log('Player 2 is the winner!')
  }
}

module.exports = {
  checkWinner
}
