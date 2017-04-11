'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('Successful sign up!')
  console.log(data)
}

const signUpFailure = (error) => {
  console.log('Sign up failure!')
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('Sign in successful!')
  console.log(data)
  store.user = data.user
  console.log('Logging store.user here = ' + store.user)
}

const signInFailure = (error) => {
  console.log('Incorrect password - Sign in failure!')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
