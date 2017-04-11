const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const checkwinner = require('./checkwinner')

let gameBoard = []
let activePlayer = 1

const startGame = function () {
  console.log('start game function initialized!')
  gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  activePlayer = 1
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
  gamePlay(0)
}

const gamePlay1 = function () {
  console.log('Calling gamePlay 1 function')
  console.log('The current active player is: ', activePlayer)
  gamePlay(1)
}

const gamePlay = function (square) {
  // event.preventDefault()
  console.log('Game play was initialized and the event is: ', event)
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
  // $('.zero').on('click', gamePlay0)
  // $('.zero').on('click', gamePlay0)
  // $('.zero').on('click', gamePlay0)
}

module.exports = {
  addHandlers
}
