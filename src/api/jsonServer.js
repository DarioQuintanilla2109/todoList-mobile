import axios from 'axios'

//changes once every 8 hours
export default axios.create({
  baseURL: 'http://4f6767332e89.ngrok.io',
})
