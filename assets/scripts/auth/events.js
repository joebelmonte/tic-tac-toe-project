const getFormFields = require(`../../../lib/get-form-fields`)
const getFormFields2 = require(`../../../lib/get-form-fields2`)

const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let activePlayer = 1
let tieCheck = []
let userStats = {
  games: 0
}

const startGame = function () {
  event.preventDefault()
  $('#board').show()
  $('.userStats').hide()
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  activePlayer = 1
  tieCheck = []
  api.postGame()
    .then(ui.postGameSuccess)
    .catch(ui.postGameFailure)
  $('.status').text('Current move: Player 1')
  $('.zero').text('')
  $('.one').text('')
  $('.two').text('')
  $('.three').text('')
  $('.four').text('')
  $('.five').text('')
  $('.six').text('')
  $('.seven').text('')
  $('.eight').text('')
}

const fillBoard = function (array) {
  for (let i = 0; i < 9; i++) {
    if (array[i] === 0) {
      gameBoard[i] = 5
      array[i] = 5
    }
  }
}

const checkWinner = function (gameBoard) {
  const topRow = gameBoard[0] + gameBoard[1] + gameBoard[2]
  const midRow = gameBoard[3] + gameBoard[4] + gameBoard[5]
  const bottomRow = gameBoard[6] + gameBoard[7] + gameBoard[8]
  const leftColumn = gameBoard[0] + gameBoard[3] + gameBoard[6]
  const midColumn = gameBoard[1] + gameBoard[4] + gameBoard[7]
  const rightColumn = gameBoard[2] + gameBoard[5] + gameBoard[8]
  const slash = gameBoard[2] + gameBoard[4] + gameBoard[6]
  const backSlash = gameBoard[0] + gameBoard[4] + gameBoard[8]
  if (topRow === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (topRow === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }

  if (midRow === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (midRow === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (bottomRow === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (bottomRow === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (leftColumn === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (leftColumn === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (midColumn === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (midColumn === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (rightColumn === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (rightColumn === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (slash === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (slash === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (backSlash === 3) {
    fillBoard(gameBoard)
    $('.status').text('Player 1 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  if (backSlash === -3) {
    fillBoard(gameBoard)
    $('.status').text('Player 2 is the winner!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
    return
  }
  tieCheck = []
  for (let i = 0; i < 9; i++) {
    if (gameBoard[i] === 1) {
      tieCheck.push(1)
    }
    if (gameBoard[i] === -1) {
      tieCheck.push(1)
    }
  }
  if (tieCheck.length === 9) {
    $('.status').text('Tie Game!')
    const forPatch = {
      "game": {
        "over": true
      }
    }
    api.patchGame(forPatch)
  }
}

const togglePlayer = function (param) {
  if (param === 1) {
    activePlayer = 2
  } else {
    activePlayer = 1
  }
  $('.status').text('Current move: Player ' + activePlayer)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signInAuto(data)
        .then(ui.autoSignInSuccess)
        .catch(ui.autoSignInFailure)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const signOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const gamePlay0 = function () {
  if (gameBoard[0] === 0) {
    if (activePlayer === 1) {
      $('.zero').text('X')
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
      $('.zero').text('O')
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
  if (gameBoard[1] === 0) {
    if (activePlayer === 1) {
      $('.one').text('X')
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
      $('.one').text('O')
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
  if (gameBoard[2] === 0) {
    if (activePlayer === 1) {
      $('.two').text('X')
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
      $('.two').text('O')
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
  if (gameBoard[3] === 0) {
    if (activePlayer === 1) {
      $('.three').text('X')
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
      $('.three').text('O')
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
  if (gameBoard[4] === 0) {
    if (activePlayer === 1) {
      $('.four').text('X')
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
      $('.four').text('O')
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
  if (gameBoard[5] === 0) {
    if (activePlayer === 1) {
      $('.five').text('X')
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
      $('.five').text('O')
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
  if (gameBoard[6] === 0) {
    if (activePlayer === 1) {
      $('.six').text('X')
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
      $('.six').text('O')
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
  if (gameBoard[7] === 0) {
    if (activePlayer === 1) {
      $('.seven').text('X')
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
      $('.seven').text('O')
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
  if (gameBoard[8] === 0) {
    if (activePlayer === 1) {
      $('.eight').text('X')
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
      $('.eight').text('O')
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
  if (gameBoard[square] === 0) {
    if (activePlayer === 1) {
      gameBoard[square] = 1
    } else {
      gameBoard[square] = -1
    }
    togglePlayer(activePlayer)
    checkWinner(gameBoard)
  } else {
  }
}

const getStats = function (event) {
  event.preventDefault()
  api.getUserGames()
    .then(ui.getUserGamesSuccess)
    .catch(ui.getUserGamesFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#signOut').on('submit', signOut)
  $('#startGame').on('submit', startGame)
  $('#startGame').on('click', function () {
    $('#board').show()
  })
  $('#startGame').on('click', function () {
    $('p').show()
  })
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
