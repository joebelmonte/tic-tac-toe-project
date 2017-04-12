const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const checkwinner = require('./checkwinner')

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let activePlayer = 1

const startGame = function () {
  event.preventDefault()
  console.log('start game function initialized!')
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  activePlayer = 1
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

const togglePlayer = function (param) {
  console.log('Inside toggle player and initial active player is: ', activePlayer)
  if (param === 1) {
    activePlayer = 2
  } else {
    activePlayer = 1
  }
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
    } else {
      document.getElementsByClassName('zero')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('one')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('two')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('three')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('four')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('five')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('six')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('seven')[0].innerHTML = 'O'
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
    } else {
      document.getElementsByClassName('eight')[0].innerHTML = 'O'
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
    checkwinner.checkWinner(gameBoard)
    console.log('at the end of the gamePlay function the active player is: ', activePlayer)
  } else {
    console.log('square is already occupied')
  }
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
}

module.exports = {
  addHandlers
}
