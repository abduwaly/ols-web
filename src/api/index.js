import axios from 'axios'

const Config = {
  API_ROOT: '/api/'
}

let api = {
  register(data) {
    return axios.post(Config.API_ROOT + "users", data)
  }
}

export default api
