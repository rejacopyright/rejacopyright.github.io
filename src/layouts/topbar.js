import React, {Fragment, useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '_assets/images/logo.png'
import { connect } from 'react-redux'

function TopBar(props){
  const [height, heightSet] = useState(0)
  const ref = useRef()
  useEffect(() => {
    heightSet(ref.current.offsetHeight)
  }, [])
  return (
    <Fragment>
      <div ref={ref} className="navbar navbar-expand flex-column flex-md-row navbar-custom">
        <div className="container-fluid">
          <Link to="/" className="navbar-brands mr-0 mr-md-2 logo">
            <span className="logo-lg center-left">
              <img src={Logo} alt="img" height={25} className="radius-50" />
              <span className="d-inline ml-2 text-primary f-700 text-12">RJ Shop</span>
            </span>
            <span className="logo-sm"> <img src={Logo} alt="img" height={24} /> </span>
          </Link>
          <ul className="navbar-nav flex-row list-unstyled menu-left mb-0">
            <li>
              <button className="button-menu-mobile open-left disable-btn">
                <i data-feather="menu" className="menu-icon" />
                <i data-feather="x" className="close-icon" />
              </button>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto list-unstyled topnav-menu center mb-0">
            <li className="d-none d-sm-block">
              <div className="app-search">
                <form>
                  <div className="input-group">
                    <span data-feather="search" />
                    <input type="text" id="search" className="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>
            </li>
            <li className="dropdown notification-list">
              <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                <i data-feather="message-circle" />
                <div className="absolute t-0 r-0"><div className="center bg-danger text-white bold ppx-3 text-7 lh-12 radius-20 mt-1">99+</div></div>
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-sm">
                <div className="dropdown-item noti-title border-bottom">
                  <h5 className="m-0 text-10">
                    <span className="float-right">
                      <Link to="#" className="text-dark">
                        <small> Tandai Sudah Dibaca </small>
                      </Link>
                    </span>
                    Pesan
                  </h5>
                </div>
                <div className="slimscroll noti-scroll">
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-1.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Reja </p>
                      <p className="m-0 lh-12 text-muted text-truncate"> <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum alias natus aut, maxime id, voluptatem. </small> </p>
                    </div>
                  </Link>
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-2.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Jamil </p>
                      <p className="m-0 lh-12 text-muted"> <small> Wow ! this admin looks good and awesome design </small> </p>
                    </div>
                  </Link>
                </div>
                <Link to="#" className="dropdown-item text-center text-primary notify-item notify-all border-top"> Lihat Semua </Link>
              </div>
            </li>
            <li className="dropdown notification-list">
              <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                <i data-feather="bell" />
                <span className="noti-icon-badge" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-sm">
                <div className="dropdown-item noti-title border-bottom">
                  <h5 className="m-0 text-10">
                    <span className="float-right">
                      <Link to="#" className="text-dark">
                        <small> Tandai Sudah Dibaca </small>
                      </Link>
                    </span>
                    Pesan
                  </h5>
                </div>
                <div className="slimscroll noti-scroll">
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-1.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Reja </p>
                      <p className="m-0 lh-12 text-muted text-truncate"> <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum alias natus aut, maxime id, voluptatem. </small> </p>
                    </div>
                  </Link>
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-2.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Jamil </p>
                      <p className="m-0 lh-12 text-muted"> <small> Wow ! this admin looks good and awesome design </small> </p>
                    </div>
                  </Link>
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-1.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Reja </p>
                      <p className="m-0 lh-12 text-muted text-truncate"> <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum alias natus aut, maxime id, voluptatem. </small> </p>
                    </div>
                  </Link>
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-2.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Jamil </p>
                      <p className="m-0 lh-12 text-muted"> <small> Wow ! this admin looks good and awesome design </small> </p>
                    </div>
                  </Link>
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-1.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Reja </p>
                      <p className="m-0 lh-12 text-muted text-truncate"> <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum alias natus aut, maxime id, voluptatem. </small> </p>
                    </div>
                  </Link>
                  <Link to="#" className="dropdown-item notify-item border-bottom center-left">
                    <div className="same-25"> <img src={require('_dummy/avatar/c-2.png').default} className="img-fluid rounded-circle" alt="img" /> </div>
                    <div className="ml-2 mxw-200">
                      <p className="m-0 lh-12"> Jamil </p>
                      <p className="m-0 lh-12 text-muted"> <small> Wow ! this admin looks good and awesome design </small> </p>
                    </div>
                  </Link>
                </div>
                <Link to="#" className="dropdown-item text-center text-primary notify-item notify-all border-top"> Lihat Semua </Link>
              </div>
            </li>
            <li className="dropdown notification-list">
              <Link to="/settings" className="nav-link right-bar-toggle"> <i data-feather="settings" /> </Link>
            </li>
            <li className="dropdown notification-list align-self-center profile-dropdown">
              <Link to="#" className="nav-link dropdown-toggle nav-user mr-0" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                <div className="media user-profile py-0 center-left">
                  <img src={require('_dummy/avatar/c-2.png').default} alt="user" className="same-25" />
                  <div className="media-body text-left">
                    <h6 className="pro-user-name ml-2 my-0">
                      <span> Reja Jamil </span>
                      <span className="pro-user-desc text-muted d-block">rejajamil </span>
                    </h6>
                  </div>
                  <span data-feather="chevron-down" className="ml-2 align-self-center" />
                </div>
              </Link>
              <div className="dropdown-menu profile-dropdown-items dropdown-menu-right">
                <Link to="/vendor" className="dropdown-item notify-item"> <i data-feather="user" className="icon-dual icon-xs mr-2" /> <span> Beralih ke Vendor </span> </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item notify-item"> <i data-feather="user" className="icon-dual icon-xs mr-2" /> <span> My Account </span> </Link>
                <Link to="#" className="dropdown-item notify-item"> <i data-feather="settings" className="icon-dual icon-xs mr-2" /> <span>Settings</span> </Link>
                <Link to="#" className="dropdown-item notify-item"> <i data-feather="help-circle" className="icon-dual icon-xs mr-2" /> <span>Support</span> </Link>
                <Link to="#" className="dropdown-item notify-item"> <i data-feather="lock" className="icon-dual icon-xs mr-2" /> <span> Lock Screen </span> </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item notify-item" onClick={() => props.dispatch({type: 'LOGOUT'})}> <i data-feather="log-out" className="icon-dual icon-xs mr-2" /> <span>Logout</span> </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ paddingBottom: height }} />
    </Fragment>
  )
}

export default connect(s=>s)(TopBar)
