const store = require('../store')

const signUpSuccess = (response) => {
  $('#sign-up-form')[0].reset()
  $('#sign-up').modal('hide')
  // console.log('sign up success')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text('Thanks for signing up, please sign in to achieve your goals!')
}

const signUpError = (response) => {
  $('#sign-up-form')[0].reset()
  // console.log('sign up failed!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again. If you keep seeing this message, it is possible that your email has already been taken.')
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
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text('Welcome! To get started logging press Log Accomplishment. To view all of your accomplishments click Get Accomplishments.')
}

const signInError = (response) => {
  $('#sign-in-form')[0].reset()
  // console.log('sign in failed!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again.')
}

const changePasswordSuccess = (response) => {
  $('#change-password-form')[0].reset()
  $('#change-password').modal('hide')
  // console.log('change password success')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully changed your password, please don't forget it!`)
}

const changePasswordError = (response) => {
  $('#change-password-form')[0].reset()
  // console.log('change password failed!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again. Are you sure you entered your password correctly?')
}

const signOutSuccess = () => {
  // console.log('sign out success')
  $('.signed-in').css('visibility', 'hidden')
  $('.signed-out').css('visibility', 'visible')
  $('.view-accomplishments').empty()
  $('#message-modal').modal('show')
  $('#message-title').text('Goodbye!!')
  $('#message-text').text('Thanks for using Star Chart! Come back soon to keep tracking your success!')
}

const signOutError = (response) => {
  // console.log('sign out failed!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, please try again.')
}

const resetAuthForms = () => {
  $('#change-password-form')[0].reset()
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
}

const infoButton = (response) => {
  $('#message-modal').modal('show')
  $('#message-title').text('Thanks for using Star Chart!')
  $('#message-text').text(`Welcome to Star Chart!  I've built an unconventional Star Chart for you.  Instead of the traditional start chart where you would set your goals, and then use self-discipline to attempt to accomplish these goals, this chart encourages you to end each day with a gratitude exercise of writing what positive accomplishments you've achieved for the day.

  In a 2014 Harvard Business Review article by David DeSteno titled, "Gratitude is the New Willpower," they describe a study where using self-discipline to accomplish goals eventually fails, but an alternative way to accomplish goals was using gratitude.  Gratitude can foster long-term thinking and encourage people to go after their goals even when raw self- discipline is exhausted.

  This star chart was designed with exactly these types of psychological research in mind.  Happy starring!`)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError,
  resetAuthForms,
  infoButton
}
