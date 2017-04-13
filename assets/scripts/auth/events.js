const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let activePlayer = 1
let tieCheck = []

const startGame = function () {
  event.preventDefault()
  console.log('start game function initialized!')
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  activePlayer = 1
  tieCheck = []
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  document.getElementsByClassName('status')[0].innerHTML = 'Current move: Player 1'
  document.getElementsByClassName('zero')[0].innerHTML = ''
  document.getElementsByClassName('one')[0].innerHTML = ''
  document.getElementsByClassName('two')[0].innerHTML = ''
  document.getElementsByClassName('three')[0].innerHTML = ''
  document.getElementsByClassName('four')[0].innerHTML = ''
  document.getElementsByClassName('five')[0].innerHTML = ''
  document.getElementsByClassName('six')[0].innerHTML = ''
  document.getElementsByClassName('seven')[0].innerHTML = ''
  document.getElementsByClassName('eight')[0].innerHTML = ''
  console.log(gameBoard)
  console.log(activePlayer)
}

const fillBoard = function (array) {
  console.log('launching fillBoard')
  console.log('the value of the array is: ', array)
  console.log('the value of game board is:', gameBoard)
  for (let i = 0; i < 9; i++) {
    if (array[i] === 0) {
      gameBoard[i] = 5
      array[i] = 5
    }
  }
  console.log('ending fillBoard')
  console.log('the value of the array is: ', array)
  console.log('the value of game board is:', gameBoard)
}

const checkWinner = function (gameBoard) {
  console.log('Checking for a winner using game board: ', gameBoard)
  const topRow = gameBoard[0] + gameBoard[1] + gameBoard[2]
  const midRow = gameBoard[3] + gameBoard[4] + gameBoard[5]
  const bottomRow = gameBoard[6] + gameBoard[7] + gameBoard[8]
  const leftColumn = gameBoard[0] + gameBoard[3] + gameBoard[6]
  const midColumn = gameBoard[1] + gameBoard[4] + gameBoard[7]
  const rightColumn = gameBoard[2] + gameBoard[5] + gameBoard[8]
  const slash = gameBoard[2] + gameBoard[4] + gameBoard[6]
  const backSlash = gameBoard[0] + gameBoard[4] + gameBoard[8]
  if (topRow === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (topRow === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
  }
  const forPatch = {
    "game": {
      "over": true
    }
  }
  api.patchGame(forPatch)
  if (midRow === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (midRow === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (bottomRow === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (bottomRow === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (leftColumn === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (leftColumn === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (midColumn === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (midColumn === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (rightColumn === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (rightColumn === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (slash === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (slash === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (backSlash === 3) {
    console.log('Player 1 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 1 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  if (backSlash === -3) {
    console.log('Player 2 is the winner!')
    fillBoard(gameBoard)
    document.getElementsByClassName('status')[0].innerHTML = 'Player 2 is the winner!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
  console.log('Checking for a tie and the game board is ', gameBoard)
  tieCheck = []
  for (let i = 0; i < 9; i++) {
    if (gameBoard[i] === 1) {
      tieCheck.push(1)
    }
    if (gameBoard[i] === -1) {
      tieCheck.push(1)
    }
  }
  console.log('Tie check is ', tieCheck, 'and the length is ', tieCheck.length)
  if (tieCheck.length === 9) {
    document.getElementsByClassName('status')[0].innerHTML = 'Tie Game!'
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
}

const togglePlayer = function (param) {
  console.log('Inside toggle player and initial active player is: ', activePlayer)
  if (param === 1) {
    activePlayer = 2
  } else {
    activePlayer = 1
  }
  document.getElementsByClassName('status')[0].innerHTML = 'Current move: Player ' + activePlayer
  console.log('End of toggle player and resulting active player is: ', activePlayer)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log('onSignIn ran!')
  console.log('and the data is: ', data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change password event detected.')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const signOut = function (event) {
  event.preventDefault()
  console.log('Sign out event detected.')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const gamePlay0 = function () {
  console.log('Calling gamePlay 0 function')
  console.log('The current active player is: ', activePlayer)
  console.log('The game board here is: ', gameBoard)
  if (gameBoard[0] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('zero')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 0,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('zero')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 0,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(0)
}

const gamePlay1 = function () {
  console.log('Calling gamePlay 1 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[1] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('one')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 1,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('one')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 1,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(1)
}

const gamePlay2 = function () {
  console.log('Calling gamePlay 2 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[2] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('two')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 2,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('two')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 2,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(2)
}

const gamePlay3 = function () {
  console.log('Calling gamePlay 3 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[3] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('three')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 3,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('three')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 3,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(3)
}

const gamePlay4 = function () {
  console.log('Calling gamePlay 4 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[4] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('four')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 4,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('four')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 4,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(4)
}

const gamePlay5 = function () {
  console.log('Calling gamePlay 5 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[5] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('five')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 5,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('five')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 5,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(5)
}

const gamePlay6 = function () {
  console.log('Calling gamePlay 6 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[6] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('six')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 6,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('six')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 6,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(6)
}

const gamePlay7 = function () {
  console.log('Calling gamePlay 7 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[7] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('seven')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 7,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('seven')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 7,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(7)
}

const gamePlay8 = function () {
  console.log('Calling gamePlay 8 function')
  console.log('The current active player is: ', activePlayer)
  if (gameBoard[8] === 0) {
    if (activePlayer === 1) {
      document.getElementsByClassName('eight')[0].innerHTML = 'X'
      const forPatch = {
        "game": {
          "cell": {
            "index": 8,
            "value": "x"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    } else {
      document.getElementsByClassName('eight')[0].innerHTML = 'O'
      const forPatch = {
        "game": {
          "cell": {
            "index": 8,
            "value": "o"
          },
          "over": false
        }
      }
      api.patchGame(forPatch)
    }
  }
  gamePlay(8)
}

const gamePlay = function (square) {
  // event.preventDefault()
  console.log('Game play was initialized and the event is: ', event)
  console.log('Game board square 0 value is: ', gameBoard[square])
  if (gameBoard[square] === 0) {
    if (activePlayer === 1) {
      gameBoard[square] = 1
    } else {
      gameBoard[square] = -1
    }
    console.log('within game play function active player is: ', activePlayer)
    togglePlayer(activePlayer)
    checkWinner(gameBoard)
    console.log('at the end of the gamePlay function the active player is: ', activePlayer)
  } else {
    console.log('square is already occupied')
  }
}

const getStats = function (event) {
  event.preventDefault()
  console.log('Inside getStats')
  api.getUserGames()
    .then(ui.getUserGamesSuccess)
    .catch(ui.getUserGamesFailure)
  console.log('finished getStats')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#signOut').on('submit', signOut)
  $('#startGame').on('submit', startGame)
  $('.zero').on('click', gamePlay0)
  $('.one').on('click', gamePlay1)
  $('.two').on('click', gamePlay2)
  $('.three').on('click', gamePlay3)
  $('.four').on('click', gamePlay4)
  $('.five').on('click', gamePlay5)
  $('.six').on('click', gamePlay6)
  $('.seven').on('click', gamePlay7)
  $('.eight').on('click', gamePlay8)
  $('#stats').on('click', getStats)
}

module.exports = {
  addHandlers
}
