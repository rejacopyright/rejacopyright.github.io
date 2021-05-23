import React, {forwardRef} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Avatar from '_dummy/avatar/c-1.png'

const Footer = forwardRef((props, ref) => (
  <div className={`left-side-menu ${!props.show && 'd-none'}`} id="leftMenu" ref={ref}>
    <div className="media user-profile  mb-2 border-bottom border-gray">
      <img src={Avatar} className="avatar-sm rounded-circle mr-2" alt="Admin" />
      <img src={Avatar} className="avatar-xs rounded-circle mr-2" alt="Admin" />
      <div className="media-body oh">
        <h6 className="pro-user-name text-dark my-0 text-truncate">Reja Jamil</h6>
        <div className="pro-user-desc text-primary text-8 text-truncate">Administrator</div>
      </div>
      <div className="dropdown align-self-center">
        <Link className="dropdown-toggle m-0" data-toggle="dropdown" to="#"> <span data-feather="chevron-down" className="text-dark lh-0 bg-light border border-light shadow-xs same-20 center radius-50" /> </Link>
        <div className="dropdown-menu profile-dropdown-items shadow-md py-2">
          <Link to="/" className="dropdown-item"> <i data-feather="user" className="icon-dual icon-xs mr-2"></i> <span>Beralih ke User</span> </Link>
          <div className="dropdown-divider"></div>
          <Link to="/account" className="dropdown-item"> <i data-feather="user" className="icon-dual icon-xs mr-2"></i> <span>My Account</span> </Link>
          <Link to="#" className="dropdown-item"> <i data-feather="settings" className="icon-dual icon-xs mr-2"></i> <span>Settings</span> </Link>
          <Link to="#" className="dropdown-item"> <i data-feather="help-circle" className="icon-dual icon-xs mr-2"></i> <span>Support</span> </Link>
          <Link to="#" className="dropdown-item"> <i data-feather="lock" className="icon-dual icon-xs mr-2"></i> <span>Lock Screen</span> </Link>
          <div className="dropdown-divider"></div>
          <Link to="#" className="dropdown-item" onClick={() => props.dispatch({type: 'LOGOUT'})}> <i data-feather="log-out" className="icon-dual icon-xs mr-2"></i> <span>Logout</span> </Link>
        </div>
      </div>
    </div>
    <div className="sidebar-content">
      <div id="sidebar-menu" className="slimscroll-menu">
        <ul className="metismenu" id="menu-bar">
          <li> <Link to="/vendor/dashboard"> <i data-feather="home"></i> <span className="badge badge-danger float-right">1</span> <span> Dashboard </span> </Link> </li>
          <li> <Link to="/vendor/setting"> <i data-feather="settings" /> <span> Pengaturan </span> </Link> </li>
          <li> <Link to="/vendor/coding"> <i data-feather="code" /> <span> Coding </span> </Link> </li>
          {/* <li className="menu-title">Components</li> */}
          {/* FORMS */}
          <li>
            <Link to="/vendor/ui"> <i data-feather="file-text" /> <span> Forms </span> <span className="menu-arrow"></span> </Link>
            <ul className="nav-second-level">
              <li> <Link to="/vendor/form/basic">Basic</Link> </li>
              <li> <Link to="/vendor/form/decimal">Decimal</Link> </li>
              <li> <Link to="/vendor/form/editor">Editor</Link> </li>
              <li> <Link to="/vendor/form/search">Search</Link> </li>
              <li> <Link to="/vendor/form/select">Select</Link> </li>
            </ul>
          </li>
          {/* ICONS */}
          <li>
            <Link to="/vendor/ui"> <i data-feather="smile" /> <span> Icons </span> <span className="menu-arrow"></span> </Link>
            <ul className="nav-second-level">
              <li> <Link to="/vendor/icons/feather">Feather</Link> </li>
              <li> <Link to="/vendor/icons/unicons">Unicons</Link> </li>
            </ul>
          </li>
          {/* PAGES */}
          <li>
            <Link to="/vendor/ui"> <i data-feather="folder" /> <span> Pages </span> <span className="menu-arrow"></span> </Link>
            <ul className="nav-second-level">
              <li> <Link to="/vendor/pages/blank">Blank</Link> </li>
              <li> <Link to="/vendor/pages/data">Data</Link> </li>
              <li> <Link to="/vendor/pages/email">Email</Link> </li>
              <li> <Link to="/vendor/pages/profile">Profile</Link> </li>
            </ul>
          </li>
          {/* PLUGINS */}
          <li>
            <Link to="/vendor/ui"> <i data-feather="package" /> <span> Plugins </span> <span className="menu-arrow"></span> </Link>
            <ul className="nav-second-level">
              <li> <Link to="/vendor/plugins/calendar">Calendar</Link> </li>
              <li> <Link to="/vendor/plugins/chart">Chart</Link> </li>
              <li> <Link to="/vendor/plugins/images">Images Upload</Link> </li>
              <li> <Link to="/vendor/plugins/scroll">Scroll</Link> </li>
              <li> <Link to="/vendor/plugins/slider">Slider</Link> </li>
              <li> <Link to="/vendor/plugins/sortable">Sortable</Link> </li>
            </ul>
          </li>
          {/* UI */}
          <li>
            <Link to="/vendor/ui"> <i data-feather="aperture" /> <span> UI Elements </span> <span className="menu-arrow"></span> </Link>
            <ul className="nav-second-level">
              <li> <Link to="/vendor/ui/accordion">Accordion</Link> </li>
              <li> <Link to="/vendor/ui/alert">Alert</Link> </li>
              <li> <Link to="/vendor/ui/align">Align</Link> </li>
              <li> <Link to="/vendor/ui/badge">Badge</Link> </li>
              <li> <Link to="/vendor/ui/button">Button</Link> </li>
              <li> <Link to="/vendor/ui/card">Card</Link> </li>
              <li> <Link to="/vendor/ui/chat">Chat</Link> </li>
              <li> <Link to="/vendor/ui/dropdown">Dropdown</Link> </li>
              <li> <Link to="/vendor/ui/image">Image</Link> </li>
              <li> <Link to="/vendor/ui/list">List</Link> </li>
              <li> <Link to="/vendor/ui/load">Load</Link> </li>
              <li> <Link to="/vendor/ui/loading">Loading Page</Link> </li>
              <li> <Link to="/vendor/ui/modal">Modal</Link> </li>
              <li> <Link to="/vendor/ui/progress">Progress</Link> </li>
              <li> <Link to="/vendor/ui/tab">Tab</Link> </li>
              <li> <Link to="/vendor/ui/table">Table</Link> </li>
              <li> <Link to="/vendor/ui/title">Title</Link> </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="clearfix"></div>
    </div>
  </div>
))

export default connect(s=>s)(Footer)
