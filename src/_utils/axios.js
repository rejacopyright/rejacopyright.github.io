import ax from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('token')

let axios = ax.create({
  baseURL: process.env.REACT_APP_URI+'/'
})
// axios.defaults.baseURL = process.env.REACT_APP_URI+'/'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
// axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.interceptors.request.use(req => req, error => Promise.reject(error))

// FORMDATA
function formdata(formData, obj){
  Object.entries(obj).map(r => formData.append(r[0], r[1]))
}

export {
  axios,
  formdata
}
