import {forwardRef, useEffect, useCallback} from 'react'
import {withRouter, Link} from 'react-router-dom'
import debounce from 'lodash.debounce'
import { connect } from 'react-redux'
import Avatar from '_assets/images/avatar/c-1.png'
// import { Scrollbars } from 'react-custom-scrollbars'
import $ from 'jquery'
import '_assets/js/jquery.slimscroll'

function me(el){
  const hasChild = el.closest('li').querySelector('ul.nav-second-level')
  if (hasChild) { hasChild.classList.remove('mm-collapse') }
  el.classList.add('active')
  el.closest('li').classList.add('mm-active')
  const parent = el.closest('li').closest('ul.nav-second-level')
  if (parent) {
    parent.classList.add('mm-show')
    parent.closest('li').querySelector('a').classList.add('active')
    parent.closest('li').classList.add('mm-active')
  }
}
function activeIt(el, active = true){
  Array.from(document.querySelectorAll(`#menu-bar li`)).map(r => {
    const hasChild = r.querySelector('ul.nav-second-level')
    if (hasChild) {
      hasChild.classList.add('mm-collapse')
    }
    const a = r.querySelector('a')
    a.classList.remove('active')
    a.blur()
    r.classList.remove('mm-active')
    const parent = r.closest('ul.nav-second-level')
    if (parent) {
      parent.classList.remove('mm-show')
      parent.closest('li').querySelector('a').classList.remove('active')
      parent.closest('li').querySelector('a').blur()
      parent.closest('li').classList.remove('mm-active')
    }
    return r
  })
  me(el)
  if (!active) {
    const hasChild = el.closest('li').querySelector('ul.nav-second-level')
    hasChild.classList.add('mm-collapse')
    hasChild.classList.remove('mm-show')
    el.classList.remove('active')
    el.closest('li').classList.remove('mm-active')
  }
  const initLink = document.querySelector(`#menu-bar li a`)
  let pathname = window.location.pathname.split('/')
  let activeLink = document.querySelectorAll(`#menu-bar li a[href="${pathname.join('/')}"]`)[0]
  if (!activeLink) {
    pathname.splice(-1,1)
    activeLink = document.querySelectorAll(`#menu-bar li a[href="${pathname.join('/')}"]`)[0]
    if (!activeLink) {
      pathname.splice(-1,1)
      activeLink = document.querySelectorAll(`#menu-bar li a[href="${pathname.join('/')}"]`)[0]
    }
  }
  activeLink = activeLink || initLink
  activeLink.classList.add('active')
  activeLink.closest('li').classList.add('mm-active')
  return true
}
function responsiveMenu(){
  const updateSize = debounce(() => {
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      document.body.classList.add('left-side-menu-condensed');
    } else {
      if (document.body.getAttribute('data-left-keep-condensed') !== true) {
        document.body.classList.remove('left-side-menu-condensed');
      }
    }
    if (document.body.classList.contains('scrollable-layout')) {
      document.querySelector('#sidebar-menu').removeClass("slimscroll-menu");
    }
  }, 100)
  updateSize()
  window.addEventListener('resize', updateSize)
  return () => window.removeEventListener('resize', updateSize)
}
function slims(){
  import('feather-icons').then(r =>
    $('#sidebar-menu').slimScroll({
      height: 'auto',
      position: 'right',
      size: "4px",
      touchScrollStep: 20,
      color: '#9ea5ab'
    })
  )
}
const Index = forwardRef((props, ref) => {
  const activeLink = useCallback(() => {
    let pathname = props.location.pathname.split('/')
    let activeLink = document.querySelectorAll(`#menu-bar li a[href="${pathname.join('/')}"]`)[0]
    if (!activeLink) {
      pathname.splice(-1,1)
      activeLink = document.querySelectorAll(`#menu-bar li a[href="${pathname.join('/')}"]`)[0]
      if (!activeLink) {
        pathname.splice(-1,1)
        activeLink = document.querySelectorAll(`#menu-bar li a[href="${pathname.join('/')}"]`)[0]
      }
    }
    return activeLink
  }, [props.location.pathname])
  useEffect(() => {
    const initLink = document.querySelector(`#menu-bar li a`)
    activeIt(activeLink() || initLink)
  }, [activeLink])
  useEffect(() => {
    import('feather-icons').then(f => f.replace())
    responsiveMenu()
    slims()
  }, [])
  function menuLink(e){
    e.preventDefault()
    const el = e.currentTarget
    const active = el.classList.contains('active')
    activeIt(el, !active)
  }
  return (
    <div className={`left-side-menu`} id="leftMenu" ref={ref}>
      <div className="media user-profile bg-soft-primary radius-5">
        <img src={Avatar} className="avatar-sm rounded-circle mr-2" alt="Admin" />
        <img src={Avatar} className="avatar-xs rounded-circle mr-2" alt="Admin" />
        <div className="media-body oh">
          <h6 className="pro-user-name text-dark my-0 text-truncate">Reja Jamil</h6>
          <div className="pro-user-desc text-primary text-8 text-truncate f-500">Administrator</div>
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
        <div id="sidebar-menu" className="pt-1 slimscroll-menu mm-active">
          <ul className="metismenu mm-show" id="menu-bar">
            <li> <Link to="/vendor/dashboard"> <i data-feather="home"></i> <span className="badge badge-danger float-right">1</span> <span> Dashboard </span> </Link> </li>
            <li> <Link to="/vendor/product"> <i data-feather="tag" /> <span> Produk </span> </Link> </li>
            <li> <Link to="/vendor/gallery"> <i data-feather="image" /> <span> Galeri </span> </Link> </li>
            <li> <Link to="/vendor/package"> <i data-feather="box" /> <span> Paket </span> </Link> </li>
            <li> <Link to="/vendor/setting"> <i data-feather="settings" /> <span> Pengaturan </span> </Link> </li>
            <li> <Link to="/vendor/coding"> <i data-feather="code" /> <span> Coding </span> </Link> </li>
            {/* FORMS */}
            <li>
              <Link to="/vendor/form" onClick={menuLink}> <i data-feather="file-text" /> <span> Forms </span> <span className="menu-arrow"></span> </Link>
              <ul className="nav-second-level">
                <li> <Link to="/vendor/form/basic">Basic</Link> </li>
                <li> <Link to="/vendor/form/advanced">Advanced</Link> </li>
                <li> <Link to="/vendor/form/decimal">Decimal</Link> </li>
                <li> <Link to="/vendor/form/editor">Editor</Link> </li>
                <li> <Link to="/vendor/form/select">Select</Link> </li>
              </ul>
            </li>
            {/* ICONS */}
            <li>
              <Link to="/vendor/icons" onClick={menuLink}> <i data-feather="smile" /> <span> Icons </span> <span className="menu-arrow"></span> </Link>
              <ul className="nav-second-level">
                <li> <Link to="/vendor/icons/feather">Feather</Link> </li>
                <li> <Link to="/vendor/icons/unicons">Unicons</Link> </li>
              </ul>
            </li>
            {/* PAGES */}
            <li>
              <Link to="/vendor/pages" onClick={menuLink}> <i data-feather="folder" /> <span> Pages </span> <span className="menu-arrow"></span> </Link>
              <ul className="nav-second-level">
                <li> <Link to="/vendor/pages/blank">Blank</Link> </li>
                <li> <Link to="/vendor/pages/data">Data</Link> </li>
                <li> <Link to="/vendor/pages/email">Email</Link> </li>
                <li> <Link to="/vendor/pages/profile">Profile</Link> </li>
                <li> <Link to="/vendor/pages/timeline">Timeline</Link> </li>
              </ul>
            </li>
            {/* PLUGINS */}
            <li>
              <Link to="/vendor/plugins" onClick={menuLink}> <i data-feather="package" /> <span> Plugins </span> <span className="menu-arrow"></span> </Link>
              <ul className="nav-second-level">
                <li> <Link to="/vendor/plugins/calendar">Calendar</Link> </li>
                <li> <Link to="/vendor/plugins/chart">Chart</Link> </li>
                <li> <Link to="/vendor/plugins/image">Image Editor</Link> </li>
                <li> <Link to="/vendor/plugins/images">Images Upload</Link> </li>
                <li> <Link to="/vendor/plugins/scroll">Scroll</Link> </li>
                <li> <Link to="/vendor/plugins/slider">Slider</Link> </li>
                <li> <Link to="/vendor/plugins/sortable">Sortable</Link> </li>
              </ul>
            </li>
            {/* UI */}
            <li>
              <Link to="/vendor/ui" onClick={menuLink}> <i data-feather="aperture" /> <span> UI Elements </span> <span className="menu-arrow"></span> </Link>
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
  )
})

export default connect(s=>s)(withRouter(Index))
