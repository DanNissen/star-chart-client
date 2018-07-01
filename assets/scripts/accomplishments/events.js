const getFormFields = require('../../../lib/get-form-fields')
const accomplishmentApi = require('./api')
const accomplishmentUi = require('./ui')

const onCreateAccomplishment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  accomplishmentApi.createAccomplishment(data)
    .then(accomplishmentUi.createAccomplishmentSuccess)
    .catch(accomplishmentUi.createAccomplishmentError)
}

const onGetAccomplishments = (event) => {
  event.preventDefault()
  accomplishmentApi.getAccomplishments()
    .then(accomplishmentUi.getAccomplishmentsSuccess)
    .catch(accomplishmentUi.getAccomplishmentsError)
}

const onDeleteAccomplishment = (event) => {
  event.preventDefault()
  const data = $(event.target).data('id')
  console.log('id is', data)
  accomplishmentApi.deleteAccomplishment(data)
    .then(accomplishmentUi.deleteAccomplishmentSuccess)
    .catch(accomplishmentUi.deleteAccomplishmentError)
}

const onUpdateAccomplishment = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  console.log('data is', data)
  console.log('id is', id)
  accomplishmentApi.updateAccomplishment(data, id)
    .then(accomplishmentUi.updateAccomplishmentSuccess)
    .catch(accomplishmentUi.updateAccomplishmentError)
}

module.exports = {
  onCreateAccomplishment,
  onGetAccomplishments,
  onDeleteAccomplishment,
  onUpdateAccomplishment
}
