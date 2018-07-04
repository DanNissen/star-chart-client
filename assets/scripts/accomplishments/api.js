const config = require('../config')
const store = require('../store')

const createAccomplishment = (data) => {
  // console.log('data passed to api is', data)
  // console.log('user is', store.user.email)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/accomplishments',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAccomplishments = () => {
  // console.log('user is', store.user.email)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/accomplishments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getAccomplishment = (data) => {
//   console.log('user is', store.user.email)
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/accomplishments/' + data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const deleteAccomplishment = (data) => {
  // console.log('id is:', data)
  // const url = config.apiUrl + '/accomplishments/' + data
  // console.log('url is:', url)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/accomplishments/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateAccomplishment = (data, id) => {
  // const url = config.apiUrl + '/accomplishments/' + id
  // console.log('url is:', url)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/accomplishments/' + id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createAccomplishment,
  getAccomplishments,
  // getAccomplishment,
  deleteAccomplishment,
  updateAccomplishment
}
