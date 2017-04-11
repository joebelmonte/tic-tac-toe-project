const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#signOut').on('submit', signOut)
}

module.exports = {
  addHandlers
}