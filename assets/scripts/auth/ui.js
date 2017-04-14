'use strict'

const store = require('../store.js')

let userGamesPlayed = 0

const autoSignInSuccess = (data) => {
  store.user = data.user
  $('#signOut').show()
  $('#startGame').show()
  $('#stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  // $('#LogInSuccess').modal('show')
}

const autoSignInFailure = (error) => {
  // console.error(error)
  $('#LogFailure').modal('show')
}

const signUpSuccess = (data) => {
  $('#AccountCreationSuccess').modal('show')
}

const signUpFailure = (error) => {
  // console.error(error)
  $('#AccountCreationFailure').modal('show')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#signOut').show()
  $('#startGame').show()
  $('#stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#LogInSuccess').modal('show')
}

const signInFailure = (error) => {
  // console.error(error)
  $('#LogFailure').modal('show')
}

const changePasswordSuccess = (data) => {
  $('#passWordChangeSuccess').modal('show')
}

const changePasswordFailure = (data) => {
  $('#passWordChangeFailure').modal('show')
}

const signOutSuccess = (data) => {
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#signOut').hide()
  $('#startGame').hide()
  $('#stats').hide()
  $('.userStats').hide()
  $('#board').hide()
  $('.status').hide()
  $('#signOutSuccess').modal('show')
}

const signOutFailure = (data) => {
  $('#sign-up').show()
  $('#sign-in').show()
}

const postGameSuccess = (data) => {
  store.game = data.game
}

const postGameFailure = (error) => {
  // console.error(error)
}

const getUserGamesSuccess = (data) => {
  store.games = data.games
  userGamesPlayed = store.games.length
  $('.userStats').text('You have played ' + store.games.length + ' games!')
  $('.userStats').show()
}

const getUserGamesFailure = (error) => {
  // console.error(error)
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
  userGamesPlayed,
  autoSignInSuccess,
  autoSignInFailure
}
