const signUpSuccess = (response) => {
  $('#sign-up-form')[0].reset()
  $('#sign-up').modal('hide')
  console.log('sign up success')
}

const signUpError = (response) => {
  $('#sign-up-form')[0].reset()
  console.log('sign up failed!!!')
}

module.exports = {
  signUpSuccess,
  signUpError
}
