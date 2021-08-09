import Routes from 'routes'
import 'moment/locale/id'
// Store
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import Login from 'views/_auth/login_dummy'
// _assets
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '_assets/scss/bootstrap.scss'
import '_assets/scss/icons.scss'
import '_assets/scss/app.scss'
import '_assets/scss/custom.scss'
import '_assets/scss/phone.scss'

function Index(props){
  return Cookies.getJSON('auth') ? <Routes /> : <Login />
}
export default connect(s => s)(Index)
