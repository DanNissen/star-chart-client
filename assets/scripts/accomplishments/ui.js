const showAccomplishmentsTemplate = require('../templates/accomplishment-view.handlebars')
// const accomplishmentApi = require('./api')

const createAccomplishmentSuccess = (response) => {
  $('#create-accomplishment-form')[0].reset()
  $('#create-accomplishment').modal('hide')
  console.log('Accomplishment logged!')
}

const createAccomplishmentError = (response) => {
  $('#create-accomplishment-form')[0].reset()
  console.log('accomplishment not logged properly!!!')
}

const getAccomplishmentsSuccess = (data) => {
  console.log('retreived all accomplishments', data)
  const showAccomplishmentsHtml = showAccomplishmentsTemplate({days: data})
  $('.view-accomplishments').empty()
  $('.view-accomplishments').append(showAccomplishmentsHtml)
}

const getAccomplishmentsError = (response) => {
  console.log('couldnt retreive all accomplishments', response.responseText)
}

const deleteAccomplishmentSuccess = (response) => {
  console.log('Accomplishment deleted!', response)
  $('.delete-accomplishment').modal('hide')
}

const deleteAccomplishmentError = (response) => {
  console.log('accomplishment not deleted properly!!!', response.responseText)
}

const updateAccomplishmentSuccess = (response) => {
  $('.update-accomplishment-form')[0].reset()
  $('.update-accomplishment').modal('hide')
  console.log('Accomplishment updated!', response)
}

const updateAccomplishmentError = (response) => {
  $('.update-accomplishment-form')[0].reset()
  console.log('accomplishment not updated properly!!!', response.responseText)
}

module.exports = {
  createAccomplishmentSuccess,
  createAccomplishmentError,
  getAccomplishmentsSuccess,
  getAccomplishmentsError,
  deleteAccomplishmentSuccess,
  deleteAccomplishmentError,
  updateAccomplishmentSuccess,
  updateAccomplishmentError
}
