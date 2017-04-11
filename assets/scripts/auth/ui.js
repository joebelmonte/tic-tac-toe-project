'use strict'

// const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('Successful sign up!')
  console.log(data)
}

const signUpFailure = (error) => {
  console.log('Sign up failure!')
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
  // signInSuccess,
  // signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
