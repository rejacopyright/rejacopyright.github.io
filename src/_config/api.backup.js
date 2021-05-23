import Cookies from 'js-cookie'
const cookie = Cookies.getJSON() || {}
// const user = JSON.parse(localStorage.admin || '{}');
const api = {
  api: process.env.REACT_APP_API,
  img: process.env.REACT_APP_IMG,
  user:Cookies.getJSON('user'),
  token: Cookies.getJSON('token'),
  acc: 'application/json'
}

export default api
