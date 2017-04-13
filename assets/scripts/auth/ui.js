'use strict'

const store = require('../store.js')

let userGamesPlayed = 0

const signUpSuccess = (data) => {
  console.log('Successful sign up!')
  console.log(data)
  // $('#sign-up').hide()
  $('#AccountCreationSuccess').modal('show')
}

const signUpFailure = (error) => {
  console.log('Sign up failure!')
  console.error(error)
  $('#AccountCreationFailure').modal('show')
}

const signInSuccess = (data) => {
  console.log('Sign in successful!')
  console.log(data)
  store.user = data.user
  console.log('Logging store.user here = ' + store.user)
  $('#signOut').show()
  $('#startGame').show()
  $('#stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = (error) => {
  console.log('Incorrect password - Sign in failure!')
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('Password changed successfully.')
  console.log(data)
}

const changePasswordFailure = (data) => {
  console.log('Password change FAILURE.')
  console.log(data)
}

const signOutSuccess = (data) => {
  console.log('Signed out successfully.')
  console.log('User data before delete is :', store.user)
  console.log(data)
  store.user = null
  console.log('User data after delete is: ', store.user)
  $('#sign-up').show()
  $('#sign-in').show()
  $('#signOut').hide()
  $('#startGame').hide()
  $('#stats').hide()
  $('.userStats').hide()
  $('#board').hide()
  $('.status').hide()
}

const signOutFailure = (data) => {
  console.log('Signed out FAILURE.')
  console.log(data)
  $('#sign-up').show()
  $('#sign-in').show()
}

const postGameSuccess = (data) => {
  console.log('Post game successful!')
  console.log(data)
  store.game = data.game
  console.log('Logging store.game here = ' + store.game)
  console.log('Current game ID is: ', store.game.id)
}

const postGameFailure = (error) => {
  console.log('Post game failure!')
  console.error(error)
}

const getUserGamesSuccess = (data) => {
  console.log('Entering getUserGamesSuccess!')
  console.log('Logging data here: ' + data)
  store.games = data.games
  console.log('Logging userGames here: ' + store.games)
  console.log(store.games.length)
  userGamesPlayed = store.games.length
  console.log('userGamesPlayed from within getUserGamesSuccess is: ', userGamesPlayed)
  $('.userStats').text('You have played ' + store.games.length + ' games!')
  $('.userStats').show()
}

const getUserGamesFailure = (error) => {
  console.log('Get user games failure!')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  postGameSuccess,
  postGameFailure,
  getUserGamesSuccess,
  getUserGamesFailure,
  userGamesPlayed
}
