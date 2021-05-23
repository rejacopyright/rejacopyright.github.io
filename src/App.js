import React, {useEffect, Fragment} from 'react'
import Routes from 'routes'
import 'moment/locale/id'
// Store
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import Login from 'auth/login'
// _assets
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '_assets/scss/bootstrap.scss'
import '_assets/scss/icons.scss'
import '_assets/scss/app.scss'
import '_assets/scss/custom.scss'
import '_assets/scss/phone.scss'

function Index(props){
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return(
    <Fragment>
      {
        Cookies.getJSON('auth') ?
        <Routes />
        :
        <Login />
      }
    </Fragment>
  )
}
export default connect(s => s)(Index)
