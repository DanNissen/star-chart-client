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
  $('#sign-in-form')[0].reset()
  $('#sign-in').modal('hide')
  console.log('sign in success')
}

const signInError = (response) => {
  $('#sign-in-form')[0].reset()
  console.log('sign in failed!!!')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError
}
