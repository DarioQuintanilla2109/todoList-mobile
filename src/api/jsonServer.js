import axios from 'axios'

//changes once every 8 hours
export default axios.create({
  baseURL: 'http://3c863cb1076f.ngrok.io',
})
