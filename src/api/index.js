import Axios from 'axios'

const Config = {
  API_ROOT: 'http://localhost:3000/api/'
}

export default {
  register(data) {
    return Axios.post(Config.API_ROOT + "users", data)
  }
}
