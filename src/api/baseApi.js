/*eslint-disable no-console*/

import 'whatwg-fetch'

const baseApiUrl = 'http://localhost:3002/'

export function get(endpoint) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(baseApiUrl + endpoint, options).then(onSuccess, onError)
}

function onSuccess(response) {
  if(response.status === 200) {
      return response.json()
  } else {
      return false
  }
}

function onError(error) {
  console.log(error)
}
