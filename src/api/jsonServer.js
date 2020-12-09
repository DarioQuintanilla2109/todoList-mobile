import axios from 'axios'

//changes once every 8 hours
export default axios.create({
  baseURL: 'http://14770437e8eb.ngrok.io',
})
