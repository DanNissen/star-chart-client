const showAccomplishmentsTemplate = require('../templates/accomplishment-view.handlebars')
const accomplishmentApi = require('./api')

const createAccomplishmentSuccess = (response) => {
  $('#create-accomplishment-form')[0].reset()
  $('#create-accomplishment').modal('hide')
  console.log('Accomplishment logged!')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully logged your accomplishment!`)
  accomplishmentApi.getAccomplishments()
    .then(getAccomplishmentsSuccess)
    .catch(getAccomplishmentsError)
}

const createAccomplishmentError = (response) => {
  $('#create-accomplishment-form')[0].reset()
  console.log('accomplishment not logged properly!!!')
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your accomplishments could not be created. Please try again.')
}

const getAccomplishmentsSuccess = (data) => {
  console.log('retreived all accomplishments', data)
  if (Object.keys(data).length === 0) {
    $('.view-accomplishments').append('<h1>&#9734; Nothing has been tracked yet, Please click Log Accomplishment to start! &#9734;</h1>')
  } else {
    const showAccomplishmentsHtml = showAccomplishmentsTemplate({days: data})
    $('.view-accomplishments').empty()
    $('.view-accomplishments').append(showAccomplishmentsHtml)
  }
}

const getAccomplishmentsError = (response) => {
  console.log('couldnt retreive all accomplishments', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your accomplishments could not be retreived. Please try again.')
}

const deleteAccomplishmentSuccess = (response) => {
  console.log('Accomplishment deleted!', response)
  $('.delete-accomplishment').modal('hide')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully deleted your accomplishment!`)
  accomplishmentApi.getAccomplishments()
    .then(getAccomplishmentsSuccess)
    .catch(getAccomplishmentsError)
}

const deleteAccomplishmentError = (response) => {
  console.log('accomplishment not deleted properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your accomplishment could not be deleted. Please try again.')
}

const updateAccomplishmentSuccess = (response) => {
  console.log(response)
  const key = response.accomplishment.date_accomplished
  console.log('key is', key)
  console.log('Accomplishment updated!', response)
  $('.update-accomplishment-form')[0].reset()
  $('.update-accomplishment').modal('hide')
  $('#message-modal').modal('show')
  $('#message-title').text('Success!!')
  $('#message-text').text(`You have successfully updated your accomplishment!`)
  accomplishmentApi.getAccomplishments()
    .then(getAccomplishmentsSuccess)
    .catch(getAccomplishmentsError)
}

const updateAccomplishmentError = (response) => {
  $('.update-accomplishment-form')[0].reset()
  console.log('accomplishment not updated properly!!!', response.responseText)
  $('#message-modal').modal('show')
  $('#message-title').text('Uh Oh!!')
  $('#message-text').text('Something has gone wrong, your accomplishment could not be updated. Please try again.')
}

const resetAccomplishmentForms = () => {
  $('#create-accomplishment-form')[0].reset()
}

const resetUpdateForms = () => {
  console.log('reset update form')
  $('.update-accomplishment-form input').val('')
  $('.update-accomplishment-form textarea').val('')
  $('.update-accomplishment-form select').val('Red')
}

module.exports = {
  createAccomplishmentSuccess,
  createAccomplishmentError,
  getAccomplishmentsSuccess,
  getAccomplishmentsError,
  deleteAccomplishmentSuccess,
  deleteAccomplishmentError,
  updateAccomplishmentSuccess,
  updateAccomplishmentError,
  resetAccomplishmentForms,
  resetUpdateForms
}
