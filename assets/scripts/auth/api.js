'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const signUp = (data) => {
  console.log('We are at the signUp function passing through the following data: ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('Signing in with data of ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  signIn
  // changePassword,
  // signOut
}
