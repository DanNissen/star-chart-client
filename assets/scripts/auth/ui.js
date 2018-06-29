const store = require('../store')

const signUpSuccess = (response) => {
  $('#sign-up-form')[0].reset()
  $('#sign-up').modal('hide')
  console.log('sign up success')
}

const signUpError = (response) => {
  $('#sign-up-form')[0].reset()
  console.log('sign up failed!!!')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#sign-in-form')[0].reset()
  $('#sign-in').modal('hide')
  console.log('sign in success')
  console.log('user is', store.user)
  console.log('token is', store.user.token)
}

const signInError = (response) => {
  $('#sign-in-form')[0].reset()
  console.log('sign in failed!!!')
}

const changePasswordSuccess = (response) => {
  $('#change-password-form')[0].reset()
  $('#change-password').modal('hide')
  console.log('change password success')
}

const changePasswordError = (response) => {
  $('#change-password-form')[0].reset()
  console.log('change password failed!!!')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError
}
