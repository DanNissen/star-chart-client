'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const accomplishmentEvents = require('./accomplishments/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-accomplishment-form').on('submit', accomplishmentEvents.onCreateAccomplishment)
  $('#get-accomplishments').on('click', accomplishmentEvents.onGetAccomplishments)
  $('.view-accomplishments').on('submit', '.delete-accomplishment-form', accomplishmentEvents.onDeleteAccomplishment)
  $('.view-accomplishments').on('submit', '.update-accomplishment-form', accomplishmentEvents.onUpdateAccomplishment)
  $('.auth-modal').on('hidden.bs.modal', authEvents.onResetAuthForms)
  $('.view-accomplishments').on('hidden.bs.modal', '.accomplishment-modal-handlebars', accomplishmentEvents.onResetUpdateForms)
  $('.accomplishment-modal').on('hidden.bs.modal', accomplishmentEvents.onResetAccomplishmentForms)
})
