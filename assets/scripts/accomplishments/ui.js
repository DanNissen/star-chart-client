// const store = require('../store')

const createAccomplishmentSuccess = (response) => {
  $('#create-accomplishment-form')[0].reset()
  $('#create-accomplishment').modal('hide')
  console.log('Accomplishment logged!')
}

const createAccomplishmentError = (response) => {
  $('#create-accomplishment-form')[0].reset()
  console.log('accomplishment not logged properly!!!')
}

const getAccomplishmentsSuccess = (response) => {
  console.log('retreived all accomplishments', response)
}

const getAccomplishmentsError = (response) => {
  console.log('couldnt retreive all accomplishments', response.responseText)
}

module.exports = {
  createAccomplishmentSuccess,
  createAccomplishmentError,
  getAccomplishmentsSuccess,
  getAccomplishmentsError
}
