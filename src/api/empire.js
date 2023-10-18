import axios from 'axios'

export function updateEmpireData (data) {
  return axios.put('/year/update', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
