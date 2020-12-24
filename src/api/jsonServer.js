import axios from 'axios'

//changes once every 8 hours
export default axios.create({
  baseURL: 'http://30fb11c81198.ngrok.io',
})
