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
  store.signed_in = true
  $('#sign-in-form')[0].reset()
  $('#sign-in').modal('hide')
  $('.signed-in').css('visibility', 'visible')
  $('.signed-out').css('visibility', 'hidden')
  // console.log('sign in success')
  // console.log('user is', store.user)
  // console.log('token is', store.user.token)
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

const signOutSuccess = () => {
  console.log('sign out success')
  $('.signed-in').css('visibility', 'hidden')
  $('.signed-out').css('visibility', 'visible')
  $('.view-accomplishments').empty()
}

const signOutError = (response) => {
  console.log('sign out failed!!!', response.responseText)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
}
